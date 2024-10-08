import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage{
  readonly page: Page; 
  readonly allMenu: Locator;
  readonly bestSellers: Locator;
  readonly search: Locator;
  readonly goBtn: Locator;
  readonly careers: Locator;
  readonly todaysDeal: Locator;
  readonly googleSearch: Locator;
  readonly letsShop: Locator;
  readonly addEmail: Locator;
  readonly addPassword: Locator;
  readonly loginBtn: Locator;
  readonly enterValidEmail: Locator;

  constructor(page: Page) {
    this.page = page;
    this.googleSearch = page.getByLabel('Search', { exact: true });
    this.letsShop = page.getByRole('link', { name: 'Let\'s Shop Rahul Shetty' });
    this.addEmail = page.getByPlaceholder('email@example.com');
    this.addPassword = page.getByPlaceholder('enter your passsword')
    this.loginBtn = page.getByRole('button', { name: 'Login' });
    this.enterValidEmail = page.getByText('*Enter Valid Email')

  }

  async searchGoogle() {
    await this.page.goto('https://www.google.com/');
    await this.googleSearch.fill('rahul shetty client');
    await this.page.keyboard.press('Enter');
    await this.letsShop.click();
  }

  async loginValidation() {
    await this.loginBtn.click();
    await this.addEmail.fill('test@test@gmail.com');
    await this.addPassword.fill('test');
    await this.loginBtn.click();
    await this.enterValidEmail.isVisible();

  }

  async countLinks() {
  const links = await this.page.$$eval('a', anchors => anchors.length);
  console.log(`Total number of links: ${links}`);
  expect(links).toBe(24); 
  }

}