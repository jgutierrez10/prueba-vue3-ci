import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
    export default defineConfig({
        plugins: [vue()],
        base: '/prueba-vue-ci/', // Cambia esto por el nombre de tu repositorio
        resolve: {
            alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    test: {
        globals: true,
        environment: 'jsdom'
    } 
})