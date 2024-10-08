import { expect, type Locator, type Page } from '@playwright/test';

export class HomePage{
  readonly page: Page; 
  readonly allMenu: Locator;
  readonly bestSellers: Locator;
  readonly search: Locator;
  readonly goBtn: Locator;
  readonly careers: Locator;
  readonly todaysDeal: Locator;

  constructor(page: Page) {
    this.page = page;
    this.allMenu = page.getByLabel('Open All Categories Menu');
    this.search = page.getByPlaceholder('Search Amazon');
    this.goBtn = page.getByRole('button', { name: 'Go', exact: true });
    this.search = page.getByPlaceholder('Search Amazon');
    this.todaysDeal = page.getByRole('link', { name: 'Today\'s Deals' });
  }

  async goto() {
    await this.page.goto('https://playwright.dev/');
  }



  async countLinks() {

  const links = await this.page.$$eval('a', anchors => anchors.length);
  console.log(`Total number of links: ${links}`);
  expect(links).toBe(24); 
  }


  async searchItem(item: string) {
    await this.search.click()
   await this.search.fill(item);


  }

  async todaysDealSelect() {

    await this.page.getByRole('link', { name: 'Today\'s Deals' }).click();

}}
