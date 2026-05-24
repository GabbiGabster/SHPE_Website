/**
 * vite.config.ts — WashU SHPE (GitHub Pages)
 *
 * CRITICAL FIX: `base: "/SHPE_Website/"` tells Vite to prefix all asset
 * URLs with /SHPE_Website/ so they resolve correctly on GitHub Pages at
 *   https://gabbigabster.github.io/SHPE_Website/
 *
 * Without this, Vite outputs <script src="/assets/index-abc123.js"> which
 * 404s on GitHub Pages because the actual path is
 *   /SHPE_Website/assets/index-abc123.js
 *
 * This same value is exposed as import.meta.env.BASE_URL and consumed by
 * App.tsx to set React Router's basename — so both routing AND asset loading
 * are fixed by this single setting.
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // ── GitHub Pages subpath — MUST match your repo name exactly ──────────
  base: "/SHPE_Website/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    target: "es2020",
    sourcemap: false,
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      // Explicit entry point → guarantees Vite uses main.tsx, not main.js
      input: path.resolve(__dirname, "index.html"),

      output: {
        /**
         * Split vendor code so the browser can cache React/router
         * independently of your app code.
         */
        manualChunks(id) {
          if (
            id.includes("node_modules/react/") ||
            id.includes("node_modules/react-dom/") ||
            id.includes("node_modules/react-router-dom/") ||
            id.includes("node_modules/scheduler/")
          ) {
            return "vendor-react";
          }
          if (id.includes("node_modules/lucide-react/")) {
            return "vendor-icons";
          }
        },

        chunkFileNames: "assets/js/[name]-[hash].js",
        entryFileNames: "assets/js/[name]-[hash].js",
        assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
      },
    },
  },

  // Inline only tiny assets (< 4 kB); keep images as separate files
  // so the browser can lazy-load and cache them individually.
  assetsInlineLimit: 4096,

  server: {
    port: 5173,
  },
});