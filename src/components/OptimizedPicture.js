import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function OptimizedPicture({ webp, fallback, alt, className, loading = "lazy", fetchPriority, width, height, lqip, style, }) {
    const wrapperStyle = lqip
        ? {
            backgroundImage: `url(${lqip})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
        }
        : {};
    return (_jsxs("picture", { style: lqip ? wrapperStyle : undefined, children: [_jsx("source", { srcSet: webp, type: "image/webp" }), _jsx("img", { src: fallback, alt: alt, className: className, loading: loading, decoding: "async", ...(fetchPriority ? { fetchPriority } : {}), width: width, height: height, style: style })] }));
}
