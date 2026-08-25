import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";

// When deploying to GitHub Pages as a project site, assets live under
// /<repo>/. On a custom domain (or in dev) this becomes "/".
// Flip PAGES_BASE to "/" once the site moves to blueangelclinical.com.
const PAGES_BASE = "/blueangel-website/";

/**
 * GitHub Pages has no SPA rewrite, so a direct hit to /benefits 404s.
 * Copying index.html -> 404.html makes Pages serve the app for any path,
 * and React Router then renders the correct route.
 */
function spaFallback() {
  return {
    name: "spa-404-fallback",
    closeBundle() {
      const dist = path.resolve(__dirname, "dist");
      const index = path.join(dist, "index.html");
      if (fs.existsSync(index)) {
        fs.copyFileSync(index, path.join(dist, "404.html"));
      }
    },
  };
}

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? PAGES_BASE : "/",
  plugins: [react(), spaFallback()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    host: true,
  },
}));
