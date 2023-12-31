import {defineConfig} from "vite";
import {resolve} from "path";
import handlebars from 'vite-plugin-handlebars';
import FullReload from 'vite-plugin-full-reload'
export default defineConfig({
    resolve: {
        alias: {
            "@": resolve(__dirname, "src")
        }
    },
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, "src/partials")
        }),
        FullReload(["src/partials/**/*"])
    ],
})