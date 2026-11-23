// https://docs.expo.dev/guides/using-eslint/
/* global __dirname: readonly */
const { defineConfig } = require("eslint/config");
const expoConfig = require("eslint-config-expo/flat");

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ["dist/*"],
    rules: {
      "react-hooks/exhaustive-deps": "warn",
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              regex: "^@finances/[^/]+/",
              message: "Import from the public @finances/<module> entry point.",
            },
          ],
        },
      ],
    },
  },
]);
