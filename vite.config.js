import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    target: "es2015", // Set the target JavaScript version (e.g., 'es2015', 'esnext')
    outDir: "build", // Specify the output directory (default is 'dist')
    assetsDir: "assets", // Directory under 'outDir' to nest generated assets (default is 'assets')
    sourcemap: true, // Generate source maps for better debugging in production
    chunkSizeWarningLimit: 500, // Warns if chunk size exceeds this limit (in kB)
    rollupOptions: {
      // Custom Rollup options
      input: "./index.html", // Entry point for your app (defaults to index.html)
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"], // Create a separate chunk for vendors (e.g., React)
        },
      },
    },
    cssCodeSplit: true, // Split CSS into separate files
    emptyOutDir: true, // Clean the output directory before building
  },
});
