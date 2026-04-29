import { defineConfig } from 'vite';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';
// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] })
    ],
    server: {
        host: true,
        port: 5173,
        watch: {
            usePolling: true // Require extra computation power
        },
        proxy: {
            '/api': {
                target: 'http://bff:3001/api', // target url of the server (in this case it's docker image)
                changeOrigin: true, // change the origin of host to target url whis is defined above
                rewrite: (path) => path.replace(/^\/api/, ""), // replace /api... part with an empty string
            }
        }
    }
});
//# sourceMappingURL=vite.config.js.map