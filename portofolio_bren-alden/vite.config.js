import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Pastikan baris ini ada dan benar
  base: '/bren-alden_portofolio/', 
})
