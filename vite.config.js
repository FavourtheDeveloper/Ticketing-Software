import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      'import.meta.env.VITE_CHATWOOT_BASE_URL': JSON.stringify(env.VITE_CHATWOOT_BASE_URL),
      'import.meta.env.VITE_CHATWOOT_TOKEN': JSON.stringify(env.VITE_CHATWOOT_TOKEN),
      'import.meta.env.VITE_CHATWOOT_HASH': JSON.stringify(env.VITE_CHATWOOT_HASH),
    },
  };
});
