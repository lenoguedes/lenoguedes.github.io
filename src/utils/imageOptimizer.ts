/**
 * Utility to process and optimize user-uploaded avatar images
 * Resizes to a crisp square avatar (e.g. 600x600) and compresses to ~50KB
 * ensuring safe storage in localStorage without quota limits.
 */
export async function optimizeAvatarImage(file: File, maxSize = 600): Promise<string> {
  return new Promise((resolve, reject) => {
    if (!file.type.startsWith('image/')) {
      reject(new Error('O arquivo selecionado não é uma imagem válida.'));
      return;
    }

    const reader = new FileReader();
    reader.onerror = () => reject(new Error('Erro ao ler o arquivo de imagem.'));
    reader.onload = () => {
      const img = new Image();
      img.onerror = () => reject(new Error('Erro ao carregar a imagem selecionada.'));
      img.onload = () => {
        try {
          const canvas = document.createElement('canvas');
          let width = img.width;
          let height = img.height;

          // Calculate center crop square
          const minDim = Math.min(width, height);
          const startX = (width - minDim) / 2;
          const startY = (height - minDim) / 2;

          // Target dimension
          const targetDim = Math.min(minDim, maxSize);
          canvas.width = targetDim;
          canvas.height = targetDim;

          const ctx = canvas.getContext('2d');
          if (!ctx) {
            // Fallback to raw data URL
            resolve(reader.result as string);
            return;
          }

          // Draw cropped & scaled square
          ctx.imageSmoothingEnabled = true;
          ctx.imageSmoothingQuality = 'high';
          ctx.drawImage(
            img,
            startX,
            startY,
            minDim,
            minDim,
            0,
            0,
            targetDim,
            targetDim
          );

          // Export as clean JPEG/WebP
          const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
          resolve(dataUrl);
        } catch (err) {
          // Fallback
          resolve(reader.result as string);
        }
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}
