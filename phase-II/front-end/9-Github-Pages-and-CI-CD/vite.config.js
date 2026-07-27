import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/


export default defineConfig(({mode})=>({
  base: mode==="production" ? "/ghpages-cicd/":"/",
  plugins: [react(), tailwindcss()],
    server: {
    allowedHosts: [
      "shout-clubbing-demeanor.ngrok-free.dev",
    ],
  },
}))
