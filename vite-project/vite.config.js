import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    // Custom plugin to rename bundled .css file, which is normally hardcoded as 'style.css'
    {
      name: "custom-css-name",
      enforce: "post",
      generateBundle(outputOptions, bundle) {
        bundle["style.css"].fileName = "sign-up-bundle.css";
        bundle["sign-up-bundle.css"] = bundle["style.css"];
        delete bundle["style.css"];
      },
    },
  ],
  build: {
    // Set the build command to library mode and configure options
    lib: {
      entry: "src/main.js",
      formats: ["iife"],
      name: "app",
      filename: "sign-up-bundle.js",
    },
  },
});