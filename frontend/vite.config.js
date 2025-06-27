import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react()],
    server: {
      proxy: {
        "/api": {
          target: env.VITE_API_BASE_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, "/api"),
        },
      },
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            'mui-core': ['@mui/material', 'react-transition-group'],
            'mui-icons': ['@mui/icons-material'],
            'react-vendor': ['react', 'react-dom']
          }
        }
      }
    },
    optimizeDeps: {
      include: [
        '@mui/material',
        '@mui/icons-material',
        'react-transition-group'
      ]
    }
  };
});
