import { test as setup } from "@playwright/test";
import LoginPage from "../../pages/LoginPage.js";
import fs from "fs";
import path from "path";

const authDir = path.resolve(process.cwd(), ".auth");
const authFile = path.join(authDir, "user.json");

setup("authenticate", async ({ page }) => {
  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }

  const loginPage = new LoginPage(page);

  await loginPage.navigate();
  await loginPage.fillForm(process.env.USER_ADMIN!, process.env.PASSWORD_ADMIN!);

  await page.waitForURL(/.*dashboard/);

  await page.context().storageState({ path: authFile });
});
