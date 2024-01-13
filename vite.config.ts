import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components/'),
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@public': path.resolve(__dirname, 'public/'),
      '@views': path.resolve(__dirname, 'src/views/'),
      '@constants': path.resolve(__dirname, 'src/constants/'),
      '@layouts': path.resolve(__dirname, 'src/layouts/'),
      '@': path.resolve(__dirname, 'src/'),
    },
  },
  plugins: [react(), svgr()],
});
