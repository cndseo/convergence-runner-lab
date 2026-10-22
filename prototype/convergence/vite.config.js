import { defineConfig } from 'vite';
import { resolve } from 'node:path';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : (process.env.VITE_PUBLIC_BASE || '/convergence-runner-lab/convergence/'),
  build: { outDir: '../../docs/convergence', emptyOutDir: true,
    rollupOptions: { input: { game: resolve(process.cwd(),'index.html'), cockpit: resolve(process.cwd(),'cockpit.html') } } },
  // Permit only the explicitly selected preview tunnel host.
  preview: { allowedHosts: process.env.CONVERGENCE_PREVIEW_HOST
    ? [process.env.CONVERGENCE_PREVIEW_HOST] : [] },
}));
