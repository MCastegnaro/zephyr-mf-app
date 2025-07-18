import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { withZephyr } from "vite-plugin-zephyr";

const mfConfig = {
  name: "vite_remote_button",
  filename: "remoteEntry.js",
  exposes: {
    "./Button": "./src/Button",
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), withZephyr({ mfConfig })],
  experimental: {
    renderBuiltUrl() {
      return { relative: true };
    },
  },
  build: {
    target: "chrome89",
  },

  server: {
    port: 5174,
  },
});
