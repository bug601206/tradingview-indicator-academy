import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: { sidepanel: 'sidepanel.html', background: 'src/background.ts' },
      output: { entryFileNames: 'assets/[name].js' },
    },
  },
  test: { environment: 'node', coverage: { reporter: ['text', 'html'] } },
});
