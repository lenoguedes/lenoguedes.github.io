import React, { useState, useRef } from 'react';
import { UserProfile, ThemeColor } from '../types';
import { themes } from '../utils/theme';
import { optimizeAvatarImage } from '../utils/imageOptimizer';
import {
  X,
  Camera,
  Upload,
  Link as LinkIcon,
  Check,
  RefreshCw,
  AlertCircle,
  Image as ImageIcon
} from 'lucide-react';

interface AvatarUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile;
  onUpdateAvatar: (newAvatarUrl: string) => void;
  themeColor: ThemeColor;
}

export const AvatarUploadModal: React.FC<AvatarUploadModalProps> = ({
  isOpen,
  onClose,
  profile,
  onUpdateAvatar,
  themeColor,
}) => {
  const currentTheme = themes[themeColor] || themes.indigo;
  const [activeMode, setActiveMode] = useState<'upload' | 'url'>('upload');
  const [previewUrl, setPreviewUrl] = useState<string>(profile.avatar || '');
  const [urlInput, setUrlInput] = useState<string>(profile.avatar || '');
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = async (file: File) => {
    setErrorMsg(null);
    setIsProcessing(true);
    try {
      const optimizedDataUrl = await optimizeAvatarImage(file, 600);
      setPreviewUrl(optimizedDataUrl);
      setUrlInput(optimizedDataUrl);
    } catch (err: any) {
      setErrorMsg(err.message || 'Erro ao processar imagem.');
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleApplyUrl = () => {
    if (!urlInput.trim()) {
      setErrorMsg('Informe uma URL de imagem válida.');
      return;
    }
    setErrorMsg(null);
    setPreviewUrl(urlInput.trim());
  };

  const handleSave = () => {
    if (!previewUrl) {
      setErrorMsg('Nenhuma imagem selecionada.');
      return;
    }
    onUpdateAvatar(previewUrl);
    onClose();
  };

  const handleResetToDefault = () => {
    const defaultAvatar = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80";
    setPreviewUrl(defaultAvatar);
    setUrlInput(defaultAvatar);
    setErrorMsg(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        id="avatar-upload-modal-container"
        className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className={`p-2.5 rounded-2xl ${currentTheme.primaryBg} text-white shadow-sm`}>
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                Foto de Perfil do Portfólio
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Selecione ou envie sua foto para atualizar o cabeçalho e cartões
              </p>
            </div>
          </div>

          <button
            id="close-avatar-modal-btn"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto">
          {/* Avatar Live Preview */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            <div className="flex flex-col items-center gap-2">
              <div className="relative">
                <img
                  src={previewUrl}
                  alt={profile.name}
                  referrerPolicy="no-referrer"
                  className="w-24 h-24 rounded-2xl object-cover ring-4 ring-white dark:ring-slate-800 shadow-lg"
                />
                <span className={`absolute -bottom-1 -right-1 p-1 rounded-lg ${currentTheme.primaryBg} text-white text-[10px]`}>
                  ✓
                </span>
              </div>
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Exibição no Card
              </span>
            </div>

            <div className="flex flex-col items-center gap-2">
              <img
                src={previewUrl}
                alt={profile.name}
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-full object-cover ring-2 ring-slate-200 dark:ring-slate-700 shadow-md"
              />
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">
                Navbar / Redondo
              </span>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 p-1 bg-slate-100 dark:bg-slate-800 rounded-xl">
            <button
              id="avatar-tab-upload"
              type="button"
              onClick={() => setActiveMode('upload')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'upload'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Enviar Arquivo (PNG, JPG)</span>
            </button>

            <button
              id="avatar-tab-url"
              type="button"
              onClick={() => setActiveMode('url')}
              className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                activeMode === 'url'
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-xs'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LinkIcon className="w-3.5 h-3.5" />
              <span>Inserir URL da Foto</span>
            </button>
          </div>

          {/* Mode 1: File Upload */}
          {activeMode === 'upload' && (
            <div className="space-y-3">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    handleFileChange(e.target.files[0]);
                  }
                }}
              />

              <div
                id="avatar-dropzone"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onClick={() => fileInputRef.current?.click()}
                className={`flex flex-col items-center justify-center p-8 rounded-2xl border-2 border-dashed transition-all cursor-pointer text-center ${
                  isDragging
                    ? 'border-indigo-500 bg-indigo-50/40 dark:bg-indigo-950/20'
                    : 'border-slate-300 dark:border-slate-700 hover:border-indigo-400 bg-slate-50/50 dark:bg-slate-900/50'
                }`}
              >
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 text-indigo-500 mb-3">
                  <Upload className="w-6 h-6" />
                </div>
                <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                  Clique para selecionar sua foto ou arraste o arquivo aqui
                </p>
                <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                  Suporta PNG, JPG, JPEG, WEBP (otimização e enquadramento automáticos)
                </p>

                {isProcessing && (
                  <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-indigo-500">
                    <div className="w-3.5 h-3.5 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
                    <span>Otimizando imagem para exibição ultra-rápida...</span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Mode 2: Direct URL */}
          {activeMode === 'url' && (
            <div className="space-y-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                  URL da Foto na Web (GitHub, LinkedIn, Imgur, etc.)
                </label>
                <div className="flex gap-2">
                  <input
                    type="url"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                    placeholder="https://exemplo.com/minha-foto.jpg"
                    className="flex-1 px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-900 dark:text-white"
                  />
                  <button
                    type="button"
                    onClick={handleApplyUrl}
                    className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Visualizar
                  </button>
                </div>
              </div>
            </div>
          )}

          {errorMsg && (
            <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50">
          <button
            id="reset-avatar-default-btn"
            type="button"
            onClick={handleResetToDefault}
            className="flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors cursor-pointer"
            title="Restaurar avatar placeholder inicial"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Restaurar Padrão</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Cancelar
            </button>

            <button
              id="confirm-avatar-save-btn"
              type="button"
              onClick={handleSave}
              className={`px-5 py-2 rounded-xl text-xs font-bold text-white ${currentTheme.primaryBg} ${currentTheme.primaryHover} shadow-md flex items-center gap-1.5 transition-all cursor-pointer`}
            >
              <Check className="w-4 h-4" />
              <span>Salvar Foto no Portfólio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
