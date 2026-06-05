import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) return
          if (id.includes("react-router") || id.includes("@remix-run")) return "router"
          if (id.includes("framer-motion") || id.includes("motion-")) return "motion"
          if (id.includes("lucide-react") || id.includes("react-icons")) return "icons"
          if (id.includes("radix-ui") || id.includes("@radix-ui")) return "radix"
          if (id.includes("react-dom") || id.includes("/react/") || id.includes("scheduler")) return "react"
          return "vendor"
        },
      },
    },
  },
  server: {
    allowedHosts: [
      "aghastly-saxifragaceous-louetta.ngrok-free.dev",
      "xtoadsters.com",
      "toadster.ai"
    ]
  }
})
