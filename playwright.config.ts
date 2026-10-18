import { defineConfig, devices } from "@playwright/test";
import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.resolve(process.cwd(), ".env") });

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : 1,

  reporter: [
    ["html"],
    ["json", { outputFile: "resultados.json" }],
    ["allure-playwright", { outputFolder: "allure-results" }],
  ],

  use: {
    trace: "on-first-retry",
  },

  projects: [
    // 1. Proyecto Setup (Ejecuta la autenticación inicial)
    {
      name: "setup",
      testMatch: "**/auth.setup.ts",
    },

    // 2. Módulo de Login (Sin sesión previa / Incógnito)
    {
      name: "login",
      testMatch: "**/login.spec.ts",
      use: {
        ...devices["Desktop Chrome"],
        storageState: { cookies: [], origins: [] },
      },
    },

    // 3. Navegadores Web UI Autenticados (Clientes, Artículos, Facturas, etc.)
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
        storageState: ".auth/user.json",
      },
      dependencies: ["setup"],
      testIgnore: ["**/auth.setup.ts", "**/api/**", "**/login.spec.ts"],
    },
    {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
        storageState: ".auth/user.json",
      },
      dependencies: ["setup"],
      testIgnore: ["**/auth.setup.ts", "**/api/**", "**/login.spec.ts"],
    },
    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
        storageState: ".auth/user.json",
      },
      dependencies: ["setup"],
      testIgnore: ["**/auth.setup.ts", "**/api/**", "**/login.spec.ts"],
    },

    // 4. Proyecto exclusivo para API
    {
      name: "api",
      testMatch: "**/api/**/*.spec.ts",
    },
  ],
});