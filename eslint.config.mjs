import { dirname } from "path"
import { fileURLToPath } from "url"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
  baseDirectory: __dirname,
})

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 👇 Aqui você insere suas regras customizadas
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-unused-vars": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "no-var": "off",
    },
  },

  {
    ignores: ["**/.next/**"],
  },
]

export default eslintConfig
