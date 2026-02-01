import { Page } from '@playwright/test';

export class MoviePage {
  private seeRetailersButton: ReturnType<typeof this.page.getByRole>;

  constructor(private page: Page) {
    this.seeRetailersButton = this.page.getByRole('button', { name: 'See Retailers' });
  }

  async clickSeeRetailers() {
    await this.seeRetailersButton.scrollIntoViewIfNeeded();
    await this.seeRetailersButton.click();
  }
}