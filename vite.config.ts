import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// sostituisci 'nome-repo' col nome effettivo della repo su GitHub
export default defineConfig({
  base: '/nome-repo/',
  plugins: [react()],
});
