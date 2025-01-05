import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  base:"/reactts_tic_tac_toe/",
  plugins: [react()],
})