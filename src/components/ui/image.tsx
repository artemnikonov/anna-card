import { forwardRef, type ImgHTMLAttributes, useState } from 'react'
import './image.css'

const FALLBACK_IMAGE_URL = "/images/placeholder.jpg";

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fittingType?: 'fill' | 'fit' | 'cover' | 'contain'
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(({ src, fittingType = 'cover', className = '', loading = 'lazy', ...props }, ref) => {
  const [imgSrc, setImgSrc] = useState<string | undefined>(src)

  if (!src) {
    return <div data-empty-image ref={ref as any} className={className} {...props as any} />
  }

  const objectFitClass = fittingType === 'fill' ? 'object-fill' :
                         fittingType === 'fit' ? 'object-contain' :
                         fittingType === 'contain' ? 'object-contain' :
                         'object-cover';

  return (
    <img
      ref={ref}
      src={imgSrc}
      className={`${objectFitClass} ${className} select-none pointer-events-auto`}
      loading={loading}
      onError={() => setImgSrc(FALLBACK_IMAGE_URL)}
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
      {...props}
    />
  )
})
Image.displayName = 'Image'
