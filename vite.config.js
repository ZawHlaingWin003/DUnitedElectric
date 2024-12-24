import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
    ],
    build: {
        rollupOptions: {
            input: {
                home: "index.html",
                about: "about.html",
                contact: "contact.html",
                services: "services.html",
                shop: "shop.html",
            },
        }
    },
})