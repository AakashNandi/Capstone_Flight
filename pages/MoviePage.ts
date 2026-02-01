import { Page } from '@playwright/test';

export class MoviePage {
  private seeRetailersButton: ReturnType<typeof this.page.getByRole>;  // Button to see retailers

  constructor(private page: Page) {
    // Locate the 'See Retailers' button on the page
    this.seeRetailersButton = this.page.getByRole('button', { name: 'See Retailers' });
  }

  // Method to scroll into view and click the 'See Retailers' button
  async clickSeeRetailers() {
    await this.seeRetailersButton.scrollIntoViewIfNeeded();
    await this.seeRetailersButton.click();
  }
}
