import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "vite-plugin-react-refresh";

export default defineConfig({
  plugins: [react(), reactRefresh()],
});
