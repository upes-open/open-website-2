import js from "@eslint/js";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import globals from "globals";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

export default tseslint.config(
  {
    ignores: [".next", "dist", "node_modules", "out", "build", "next-env.d.ts"],
  },
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...compat.config({ extends: ["next/core-web-vitals", "next/typescript"] }),
  eslintConfigPrettier,
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "prefer-const": [
        "error",
        { destructuring: "all", ignoreReadBeforeAssign: true },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true },
      ],
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  }
);
