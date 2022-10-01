import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import svelte from "@astrojs/svelte";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";


// https://astro.build/config
export default defineConfig({
  integrations: [preact(), svelte(), react()],
  site: "https://www.josephshambrook.dev",
  vite: {
    ssr: {
      external: ["svgo"]
    }
  },
  output: "server",
  adapter: cloudflare()
});