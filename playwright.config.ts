import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

// Carga las variables del archivo .env
dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,

  reporter: [["html"], ["json", { outputFile: "resultados.json" }], ["allure-playwright", { outputFolder: "allure-results" }]],

  use: {
    trace: "on-first-retry",
  },

  projects: [
    // 1. Proyecto Setup (Ejecuta la autenticación inicial)
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
    },

    // 2. Navegadores Web UI (Todos dependen del setup y cargan la sesión)
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: ".auth/user.json",
      },
      dependencies: ["setup"],
      testIgnore: [/.*\.setup\.ts/, /tests\/api\/.*/],
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        storageState: ".auth/user.json",
      },
      dependencies: ["setup"],
      testIgnore: [/.*\.setup\.ts/, /tests\/api\/.*/],
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        storageState: ".auth/user.json",
      },
      dependencies: ["setup"],
      testIgnore: [/.*\.setup\.ts/, /tests\/api\/.*/],
    },

    // 3. Proyecto exclusivo para API (Sin navegador ni sesión UI)
    {
      name: "api",
      testMatch: /tests\/api\/.*/,
    },
  ],
});
