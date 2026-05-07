import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import vercel from "@tanstack/start-vercel";

export default defineConfig({
  adapters: [vercel()],
  tanstackStart: {
    server: {
      entry: "server",
    },
  },
});