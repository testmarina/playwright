import { test, expect } from '@playwright/test';
import { HomePage } from "../pages/home-page.js";
const item = 'SDET'

test.describe.configure({mode: 'serial'})
let pageUrl: string;

test.beforeEach(async({page}) => {
  await page.goto(pageUrl || '');
});

test.describe('home page', () => {
test('navigation to playwright with expected title', async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.goto();
  await expect(page).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright");

  pageUrl = page.url();
});

test('search items', async ({ page }) => {
  const homePage = new HomePage(page);
  homePage.searchItem(item);
});
});
