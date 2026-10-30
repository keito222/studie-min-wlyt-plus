import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src/react',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
  },
});
