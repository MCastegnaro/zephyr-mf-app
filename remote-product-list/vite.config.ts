import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { withZephyr } from "vite-plugin-zephyr";

const mfConfig = {
  name: "vite_remote_product_list",
  filename: "remoteEntry.js",
  exposes: {
    "./ProductList": "./src/ProductList",
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
    port: 5173,
  },
});
