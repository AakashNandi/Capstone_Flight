// pages/MovieDetailsPage.ts
import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';

export class MovieDetailsPage extends BasePage {
  private seeRetailersButton: Locator;

  constructor(page: any) {
    super(page);  // Calling the constructor of the BasePage class
    this.seeRetailersButton = this.page.locator('[role="button"][name="See Retailers"]');
  }

  // Method to click the "See Retailers" button
  async clickSeeRetailers(): Promise<void> {
    await this.clickElement(this.seeRetailersButton);  // Use the click helper method from BasePage
  }
}
