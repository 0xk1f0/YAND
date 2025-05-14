import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import deno from "@deno/astro-adapter";

// https://astro.build/config
export default defineConfig({
    publicDir: "./src/public",
    output: "server",
    adapter: deno({
        hostname: "0.0.0.0",
        port: 8080
    }),
    vite: { plugins: [tailwindcss()] },
});
