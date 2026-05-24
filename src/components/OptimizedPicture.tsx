
interface OptimizedPictureProps {
  /** WebP source (preferred by modern browsers) */
  webp: string;
  /** JPEG or PNG fallback for older browsers */
  fallback: string;
  alt: string;
  className?: string;
  /** "lazy" (default) defers off-screen images; use "eager" for above-fold LCP */
  loading?: "lazy" | "eager";
  /** "high" for LCP images; omit otherwise */
  fetchPriority?: "high" | "low" | "auto";
  /** Prevents layout shift — provide actual image dimensions when known */
  width?: number;
  height?: number;
  /**
   * Low-quality placeholder data URL shown as a blurred background while
   * the full image loads.  Generate with: `npx lqip-modern <file>`
   */
  lqip?: string;
  style?: React.CSSProperties;
}

export function OptimizedPicture({
  webp,
  fallback,
  alt,
  className,
  loading = "lazy",
  fetchPriority,
  width,
  height,
  lqip,
  style,
}: OptimizedPictureProps) {
  const wrapperStyle: React.CSSProperties = lqip
    ? {
        backgroundImage: `url(${lqip})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <picture style={lqip ? wrapperStyle : undefined}>
      <source srcSet={webp} type="image/webp" />
      <img
        src={fallback}
        alt={alt}
        className={className}
        loading={loading}
        decoding="async"
        /* fetchPriority is not in all TS lib versions yet */
        {...(fetchPriority ? { fetchPriority } : {})}
        width={width}
        height={height}
        style={style}
      />
    </picture>
  );
}