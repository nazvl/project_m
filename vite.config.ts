import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import {VitePWA} from 'vite-plugin-pwa'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({

    plugins: [vue(), tailwindcss(), VitePWA({
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}']
            },
            manifest: {
                name: 'project_m',
                short_name: 'm',
                start_url: '/',
                display: 'standalone',
                background_color: '#1e2939',
                theme_color: '#1e2939'
            }
        }
    )],
    resolve: {
        alias: [
            {
                find: "@",
                replacement: path.resolve(__dirname, "src"),
            },
        ]
    },
})
