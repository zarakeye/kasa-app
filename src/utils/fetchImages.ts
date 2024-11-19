
// Define interfaces for type safety
interface ImageInfo {
  width: number;
  height: number;
  type: string;
}

interface ProcessedImage extends ImageInfo {
  url: string;
  blob: Blob;
  imageUrl: string;
  size: number;
}

interface FetchImageResult {
  success: boolean;
  images?: ProcessedImage[];
  totalSize?: number;
  error?: string;
}

const fetchImages = async (urls: string[], proxyUrl: string): Promise<FetchImageResult> => {
  try {
    const fetchPromises: Promise<ProcessedImage>[] = urls.map(async (url: string) => {
      const response = await fetch(`${proxyUrl}${encodeURIComponent(url)}`, {
        headers: {
          'Origin': window.location.origin
        }
      })

      if (!response.ok) {
        throw new Error(`Faiked to fetch image from ${url}: HTTP error! status: ${response.status} - ${response.statusText}`);
      }

      const blob: Blob = await response.blob();
      const imageUrl: string = URL.createObjectURL(blob);

      const imageInfo: ImageInfo = await new Promise((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve({
          width: image.width,
          height: image.height,
          type: blob.type || 'image/unknown'
        });
        image.onerror = () => reject(new Error('Failed to load image'));
        image.src = imageUrl;
      });

      return {
        url,
        blob,
        imageUrl,
        size: blob.size,
        ...imageInfo
      }
    })

    const results: ProcessedImage[] = await Promise.all(fetchPromises);

    return {
      success: true,
      images: results,
      totalSize: results.reduce((total, image) => total + image.size, 0)
    }
  } catch (error) {
    const  message = 'An error occurred while fetching images';
    return {
      success: false,
      error: error instanceof Error ? error.message : String(message)
    };
  }
}

export default fetchImages