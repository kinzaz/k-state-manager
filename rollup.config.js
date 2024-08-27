import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts", // Входной файл
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs",
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm",
      sourcemap: true,
    },
  ],
  plugins: [
    typescript({
      tsconfig: "./tsconfig.json", // Путь к файлу конфигурации TypeScript
    }),
  ],
};
