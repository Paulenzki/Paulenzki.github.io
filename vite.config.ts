import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tailwindcss from "@tailwindcss/vite";
import Pages from "vite-plugin-pages";

export default defineConfig({
  base: "/",
  plugins: [Pages(), tailwindcss(), react()],
});
