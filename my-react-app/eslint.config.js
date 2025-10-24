import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import parser from "@typescript-eslint/parser";
import { defineConfig } from "eslint/config";

export default defineConfig([
    {
        files: ["src/**/*.{js,jsx,ts,tsx}"],
        ignores: ["node_modules/**", "dist/**"],
        plugins: {
            react: pluginReact,
            '@typescript-eslint': tsPlugin,
        },
        extends: [
            js.configs.recommended,
            pluginReact.configs.flat.recommended,
        ],
        languageOptions: {
            parser: parser,
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: "module",
                ecmaFeatures: { jsx: true },
            },
            globals: globals.browser,
        },
        settings: {
            react: {
                version: "detect",
            },
        },
        rules: {
            "react/react-in-jsx-scope": "off",
            ...tsPlugin.configs.recommended.rules,
        },
    },
]);
