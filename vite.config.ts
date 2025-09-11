import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import { isCloudflare } from "./utils/env.ts";

export default defineConfig({
  plugins: isCloudflare
    ? [fresh(), tailwindcss(), cloudflare()]
    : [fresh(), tailwindcss()],
});
