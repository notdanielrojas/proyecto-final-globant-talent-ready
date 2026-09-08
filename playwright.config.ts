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
  workers: process.env.CI ? 1 : undefined,

  reporter: [["html"], ["json", { outputFile: "resultados.json" }], ["allure-playwright", { outputFolder: "allure-results" }]],

  use: {
    baseURL: process.env.BASE_URL,
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
});
