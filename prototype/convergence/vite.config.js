import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/convergence-runner-lab/convergence/',
  build: { outDir: '../../docs/convergence', emptyOutDir: true },
  // Permit only the explicitly selected preview tunnel host.
  preview: { allowedHosts: process.env.CONVERGENCE_PREVIEW_HOST
    ? [process.env.CONVERGENCE_PREVIEW_HOST] : [] },
}));
