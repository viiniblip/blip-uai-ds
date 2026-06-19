import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src'],
      outDir: 'dist',
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'blip-ds',
        'blip-ds-react',
      ],
      output: {
        // CSS do @fontsource fica inlined no JS (dataURL) ou extraído.
        // Extrair para um arquivo separado garante que o consumidor possa importar.
        assetFileNames: 'assets/[name][extname]',
      },
    },
    // Não minifica para facilitar debug no Make
    minify: false,
    sourcemap: true,
  },
});
