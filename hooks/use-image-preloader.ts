import { useState, useEffect } from 'react';

interface UseImagePreloaderReturn {
  images: HTMLImageElement[];
  isLoading: boolean;
  progress: number;
}

export function useImagePreloader(frameCount: number, basePath: string): UseImagePreloaderReturn {
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const loadImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        const frameNumber = index.toString().padStart(3, '0');
        
        // Try 0.059s first (most common)
        img.src = `${basePath}/frame_${frameNumber}_delay-0.059s.png`;
        
        img.onload = () => {
          loadedCount++;
          setProgress(Math.round((loadedCount / frameCount) * 100));
          resolve(img);
        };
        
        img.onerror = () => {
          // Fallback to 0.058s
          img.src = `${basePath}/frame_${frameNumber}_delay-0.058s.png`;
          
          img.onload = () => {
            loadedCount++;
            setProgress(Math.round((loadedCount / frameCount) * 100));
            resolve(img);
          };
          
          img.onerror = () => {
            console.error(`Failed to load frame ${index} with both delay patterns`);
            reject(new Error(`Failed to load frame ${index}`));
          };
        };
      });
    };

    const loadAllImages = async () => {
      try {
        for (let i = 0; i < frameCount; i++) {
          const img = await loadImage(i);
          loadedImages[i] = img;
        }
        setImages(loadedImages);
        setIsLoading(false);
      } catch (error) {
        console.error('Error loading images:', error);
        setIsLoading(false);
      }
    };

    loadAllImages();
  }, [frameCount, basePath]);

  return { images, isLoading, progress };
}
