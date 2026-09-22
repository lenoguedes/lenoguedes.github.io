import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI, Type } from "@google/genai";

dotenv.config();

const currentFilename = typeof __filename !== "undefined" ? __filename : (typeof import.meta !== "undefined" && import.meta.url ? fileURLToPath(import.meta.url) : "");
const currentDirname = typeof __dirname !== "undefined" ? __dirname : (currentFilename ? path.dirname(currentFilename) : process.cwd());

const app = express();
const PORT = 3000;

app.use(express.json({ limit: "10mb" }));

// Route to serve curriculo.html
app.get("/curriculo.html", (_req, res) => {
  const filePath = path.join(process.cwd(), "curriculo.html");
  res.sendFile(filePath);
});

function getGeminiClient(): GoogleGenAI | null {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return null;
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", aiConfigured: Boolean(process.env.GEMINI_API_KEY) });
});

// Endpoint: Parse Resume / LinkedIn Text with Gemini AI
app.post("/api/gemini/parse-resume", async (req, res) => {
  try {
    const { rawText, targetRole } = req.body;
    if (!rawText || typeof rawText !== "string" || !rawText.trim()) {
      return res.status(400).json({ error: "Texto do currículo/LinkedIn é obrigatório." });
    }

    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({
        error: "Chave GEMINI_API_KEY não configurada no servidor. Configure a chave nos segredos para usar o extrator de IA.",
      });
    }

    const systemInstruction = `Você é um especialista sênior em recrutamento técnico de elite e engenharia de software.
Sua missão é extrair e estruturar dados de currículos, perfis do LinkedIn ou textos brutos para compor um portfólio de alto nível.
Preserve todos os detalhes verdadeiros, melhore a clareza e impacto das conquistas (com métricas se existirem) e categorize habilidades técnicas com precisão.
Se o texto estiver em português ou inglês, mantenha o idioma principal do texto com excelente redação técnica em português (ou bilíngue quando apropriado).`;

    const prompt = `Analise o seguinte texto de currículo/LinkedIn e extraia as informações estruturadas:
Texto fornecido:
"""
${rawText}
"""
${targetRole ? `Foco desejado de cargo/especialidade: ${targetRole}` : ""}`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            name: { type: Type.STRING },
            headline: { type: Type.STRING },
            bio: { type: Type.STRING },
            shortPitch: { type: Type.STRING },
            email: { type: Type.STRING },
            phone: { type: Type.STRING },
            location: { type: Type.STRING },
            website: { type: Type.STRING },
            github: { type: Type.STRING },
            linkedin: { type: Type.STRING },
            yearsOfExperience: { type: Type.NUMBER },
            stats: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  label: { type: Type.STRING },
                  value: { type: Type.STRING },
                  description: { type: Type.STRING },
                },
                required: ["label", "value"],
              },
            },
            skills: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  category: { type: Type.STRING },
                  items: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                },
                required: ["category", "items"],
              },
            },
            experiences: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  role: { type: Type.STRING },
                  company: { type: Type.STRING },
                  location: { type: Type.STRING },
                  period: { type: Type.STRING },
                  isCurrent: { type: Type.BOOLEAN },
                  description: { type: Type.STRING },
                  highlights: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  technologies: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                },
                required: ["role", "company", "period", "highlights"],
              },
            },
            projects: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  tagline: { type: Type.STRING },
                  description: { type: Type.STRING },
                  category: { type: Type.STRING },
                  technologies: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                  liveUrl: { type: Type.STRING },
                  githubUrl: { type: Type.STRING },
                  metrics: { type: Type.STRING },
                  keyFeatures: {
                    type: Type.ARRAY,
                    items: { type: Type.STRING },
                  },
                },
                required: ["title", "tagline", "description", "technologies"],
              },
            },
            education: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  degree: { type: Type.STRING },
                  institution: { type: Type.STRING },
                  period: { type: Type.STRING },
                  description: { type: Type.STRING },
                },
                required: ["degree", "institution", "period"],
              },
            },
            certifications: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  issuer: { type: Type.STRING },
                  year: { type: Type.STRING },
                  url: { type: Type.STRING },
                },
                required: ["title", "issuer", "year"],
              },
            },
            languages: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  language: { type: Type.STRING },
                  level: { type: Type.STRING },
                },
                required: ["language", "level"],
              },
            },
          },
          required: ["name", "headline", "bio", "skills", "experiences"],
        },
      },
    });

    const parsedData = JSON.parse(response.text || "{}");
    return res.json({ success: true, data: parsedData });
  } catch (error: any) {
    console.error("Erro ao processar currículo com Gemini:", error);
    return res.status(500).json({
      error: "Falha ao processar texto com IA: " + (error?.message || "Erro desconhecido"),
    });
  }
});

// Endpoint: AI Bio / Pitch enhancer
app.post("/api/gemini/enhance-bio", async (req, res) => {
  try {
    const { currentBio, currentHeadline, tone, targetAudience, skills } = req.body;

    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({
        error: "Chave GEMINI_API_KEY não configurada.",
      });
    }

    const prompt = `Aprimore a bio e apresentação profissional para um portfólio de alta conversão.
Headline atual: "${currentHeadline || ""}"
Bio atual: "${currentBio || ""}"
Tom desejado: "${tone || "Profissional, inovador e focado em resultados tangíveis"}"
Público alvo: "${targetAudience || "Recrutadores técnicos, CTOs e clientes de tecnologia"}"
Habilidades chave: "${skills?.join(", ") || ""}"

Gere 3 versões otimizadas de Bio (Curta para Hero, Média para Seção Sobre, e Pitch de 1 linha) com alto impacto.`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            optimizedHeadline: { type: Type.STRING },
            heroPitch: { type: Type.STRING },
            aboutBio: { type: Type.STRING },
            keyDifferentiators: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: ["optimizedHeadline", "heroPitch", "aboutBio", "keyDifferentiators"],
        },
      },
    });

    const result = JSON.parse(response.text || "{}");
    return res.json({ success: true, data: result });
  } catch (error: any) {
    console.error("Erro ao aprimorar bio:", error);
    return res.status(500).json({ error: error?.message || "Erro ao aprimorar bio" });
  }
});

// Endpoint: AI Project Case Study generator
app.post("/api/gemini/enhance-project", async (req, res) => {
  try {
    const { rawProjectData } = req.body;
    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({ error: "Chave GEMINI_API_KEY não configurada." });
    }

    const prompt = `Transforme os seguintes detalhes brutos de projeto em um case de sucesso polido para portfólio de engenharia:
Dados do projeto:
"""
${rawProjectData}
"""`;

    const response = await ai.models.generateContent({
      model: "gemini-3.7-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            title: { type: Type.STRING },
            tagline: { type: Type.STRING },
            description: { type: Type.STRING },
            category: { type: Type.STRING },
            technologies: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            problemSolved: { type: Type.STRING },
            solutionDetails: { type: Type.STRING },
            metrics: { type: Type.STRING },
            keyFeatures: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
          },
          required: ["title", "tagline", "description", "category", "technologies", "problemSolved"],
        },
      },
    });

    const result = JSON.parse(response.text || "{}");
    return res.json({ success: true, data: result });
  } catch (error: any) {
    console.error("Erro ao estruturar projeto:", error);
    return res.status(500).json({ error: error?.message || "Erro ao processar projeto" });
  }
});

// Vite middleware & Static files
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Portfolio App & Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
