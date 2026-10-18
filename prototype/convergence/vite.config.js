import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  base: command === 'serve' ? '/' : '/convergence-runner-lab/convergence/',
  build: { outDir: '../../docs/convergence', emptyOutDir: true },
}));
