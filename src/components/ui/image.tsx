import { forwardRef, type ImgHTMLAttributes } from 'react'
import './image.css'

export type ImageProps = ImgHTMLAttributes<HTMLImageElement> & {
  fittingType?: 'fill' | 'fit' | 'cover' | 'contain'
}

export const Image = forwardRef<HTMLImageElement, ImageProps>(({
  src,
  fittingType = 'cover',
  className = '',
  loading = 'lazy',
  ...props
}, ref) => {
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
      src={src}
      className={`${objectFitClass} ${className} select-none pointer-events-auto img-loading`}
      loading={loading}
      decoding="async"
      onContextMenu={(e) => e.preventDefault()}
      draggable={false}
      {...props}
    />
  )
})
Image.displayName = 'Image'
