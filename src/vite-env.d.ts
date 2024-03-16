/// <reference types="vite-plugin-svgr/client" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
  },
  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 5173,
  }
});
