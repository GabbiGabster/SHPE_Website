/** Resolve a public asset path against the Vite base URL (works on Netlify and GitHub Pages). */
export function assetUrl(path) {
    return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
