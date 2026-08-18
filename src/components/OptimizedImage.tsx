import type { ImgHTMLAttributes } from 'react'

type OptimizedImageProps = Omit<ImgHTMLAttributes<HTMLImageElement>, 'src' | 'alt' | 'width' | 'height'> & {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  loading,
  decoding,
  fetchPriority,
  ...rest
}: OptimizedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? 'eager' : loading ?? 'lazy'}
      decoding={decoding ?? 'async'}
      fetchPriority={priority ? 'high' : fetchPriority}
      {...rest}
    />
  )
}
