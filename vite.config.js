import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        produtos: resolve(__dirname, 'produtos.html'),
        servicos: resolve(__dirname, 'servicos.html'),
        blog: resolve(__dirname, 'blog.html'),
        contato: resolve(__dirname, 'contato.html'),
        enrolavel: resolve(__dirname, 'enrolavel.html'),
        acessorios: resolve(__dirname, 'acessorios.html'),
      },
    },
  },
});
