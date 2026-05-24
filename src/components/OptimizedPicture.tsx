interface OptimizedPictureProps {
  webp: string;
  fallback: string;
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
}

export function OptimizedPicture({
  webp,
  fallback,
  alt,
  className,
  loading = "lazy",
  fetchPriority,
}: OptimizedPictureProps) {
  return (
    <picture>
      <source srcSet={webp} type="image/webp" />
      <img
        src={fallback}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        fetchPriority={fetchPriority}
      />
    </picture>
  );
}
