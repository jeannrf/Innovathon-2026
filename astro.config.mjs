import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { exec } from 'child_process';
import path from 'path';
// código extraído del repo de ia-playgrounds
// Plugin para vigilar colaboradores y regenerar el JSON de forma automática
const watchCollaborators = () => ({
  name: 'watch-collaborators',
  configureServer(server) {
    const targetDir = path.resolve('./public/images/colaboradores');
    server.watcher.add(targetDir);
    server.watcher.on('all', (event, filePath) => {
      // Ejecutar el script cuando haya cambios en las imágenes o metadatos
      if (filePath.startsWith(targetDir)) {
        exec('npx tsx scripts/generate-collaborators.ts', (err, stdout) => {
          if (err) {
            console.error('[watch-collaborators] Error:', err);
            return;
          }
          if (stdout) {
            console.log(`[watch-collaborators] Regenerado por cambio (${event}):`, stdout.trim());
          }
        });
      }
    });
  }
});

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      watchCollaborators()
    ]
  }
});