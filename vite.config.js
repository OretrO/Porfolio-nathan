import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Porfolio-nathan',
  define: {
    // Date affichée dans le pied de page (« Mis à jour le … »)
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
})
