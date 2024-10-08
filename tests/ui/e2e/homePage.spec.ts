import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/home-page.js";

test.describe.configure({mode: 'serial'})
let pageUrl: string;

test.beforeEach(async({page}) => {
  await page.goto(pageUrl || '');
});

test.describe('home page', () => {
  test("navigation to 'Let's Shop' by Google search", async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.searchGoogle();
    await expect(page).toHaveTitle("Let's Shop")
    pageUrl = page.url();
});

test('negative testing: empty filed and incorrect email & password validation', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.loginValidation();
});


test('total links and links validation', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.countLinks();
});
});
