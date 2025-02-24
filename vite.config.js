import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load environment variables
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_HASH': JSON.stringify(env.VITE_HASH),
      'import.meta.env.VITE_WEBSITE_TOKEN': JSON.stringify(env.VITE_WEBSITE_TOKEN),
    },
  };
});
