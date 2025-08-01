import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import * as path from "path";
import tailwindcss from '@tailwindcss/vite'
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  root: "client",
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
       "@": path.resolve(__dirname, "client", "src"),
    },
  },
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
});
