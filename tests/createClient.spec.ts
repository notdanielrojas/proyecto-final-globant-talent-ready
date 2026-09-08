import { test, expect } from "./fixtures/fixtures.js";
import { ClientFactory } from "./factory/client.factory.js";

test.describe("Client Management Test Suite", () => {

  test("User should be able to create a new client successfully", async ({ clientsPage, sidebar }) => {
    const CLIENT_URL = process.env.CLIENT_URL!;

    const clientData = ClientFactory.create();

    await sidebar.goToCreateClient();

    await clientsPage.fillForm(clientData);

    await expect(clientsPage.page).toHaveURL(CLIENT_URL, {
      timeout: 20000,
    });
  });
});
