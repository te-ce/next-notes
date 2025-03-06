import baseConfig from "@hono/eslint-config";
import eslintConfigPrettier from "eslint-config-prettier";
import drizzleConfig from "eslint-plugin-drizzle";

export default [
  ...baseConfig,
  eslintConfigPrettier,
  { plugins: { drizzle: drizzleConfig } },
];
