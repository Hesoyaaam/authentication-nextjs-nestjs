// import { nextJsConfig } from "@repo/eslint-config/next-js";

// /** @type {import("eslint").Linter.Config} */
// export default nextJsConfig;

export default tseslint.config({
  rules: {
    "@typescript-eslint/no-require-imports": "error",
  },
});
