import { Page } from '@playwright/test';

export class MoviePage {
  constructor(private page: Page) {}

  private seeRetailersButton =
    this.page.getByRole('button', { name: 'See Retailers' });

  async clickSeeRetailers() {
    await this.seeRetailersButton.scrollIntoViewIfNeeded();
    await this.seeRetailersButton.click();
  }
}