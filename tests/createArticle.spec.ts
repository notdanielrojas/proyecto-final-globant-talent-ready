import { test, expect } from "./fixtures/fixtures.js";
import { ArticleFactory } from "./factory/article.factory.js";

test.describe("Article Management Test Suite", () => {
  test("User should be able to create a new article successfully", async ({ articlesPage, sidebar }) => {
    const articleData = ArticleFactory.create();

    await sidebar.goToCreateArticle();

    await articlesPage.fillForm(articleData);

    await expect(articlesPage.page).toHaveURL(process.env.ARTICLE_URL!, {
      timeout: 20000,
    });
  });
});
