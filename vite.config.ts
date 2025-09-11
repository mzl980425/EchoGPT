import { defineConfig } from "vite";
import { fresh } from "@fresh/plugin-vite";
import tailwindcss from "@tailwindcss/vite";
import { isDenoDeploy, isDenoDeployEA, isDev } from "./utils/env.ts";

export default defineConfig({
  plugins: isDev || isDenoDeploy || isDenoDeployEA
    ? [fresh(), tailwindcss()]
    : [fresh(), tailwindcss()],
});
