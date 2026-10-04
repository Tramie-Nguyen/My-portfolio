import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// A relative base makes the build work both at a domain root (Vercel/Netlify)
// and in a sub-folder (GitHub Pages: username.github.io/My-portfolio/).
export default defineConfig({
  plugins: [react()],
  base: "./",
});
