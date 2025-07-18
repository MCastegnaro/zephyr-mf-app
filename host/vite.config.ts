import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { ModuleFederationOptions, withZephyr } from "vite-plugin-zephyr";

const mfConfig: ModuleFederationOptions = {
  name: "vite-host",
  filename: "remoteEntry.js",
  remotes: {
    vite_remote_header: {
      name: "vite_remote_header",
      entry: "http://localhost:5171/remoteEntry.js",
      type: "module",
    },
    vite_remote_footer: {
      name: "vite_remote_footer",
      entry: "http://localhost:5172/remoteEntry.js",
      type: "module",
    },
    vite_remote_product_list: {
      name: "vite_remote_product_list",
      entry: "http://localhost:5173/remoteEntry.js",
      type: "module",
    },
    vite_remote_button: {
      name: "vite_remote_button",
      entry: "http://localhost:5174/remoteEntry.js",
      type: "module",
    },
  },
  shared: {
    react: { singleton: true },
    "react-dom": { singleton: true },
  },
};

export default defineConfig({
  plugins: [react(), withZephyr({ mfConfig })],
  build: {
    target: "chrome89",
  },
});
