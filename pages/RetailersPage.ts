// pages/RetailersPage.ts
import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';

export class RetailersPage extends BasePage {
  private retailerButtons: Locator[];

  constructor(page: any) {
    super(page);  // Calling the constructor of the BasePage class
    this.retailerButtons = [
      this.page.locator('[role="button"][name="iTunes $12.99 4K"]'),
      this.page.locator('[role="button"][name="Prime Video $12.99 4K"]'),
      this.page.locator('[role="button"][name="Fandango at Home $12.99 4K"]'),
      this.page.locator('[role="button"][name="Google Play/YouTube $12.99 4K"]')
    ];
  }

  // Method to verify if all expected retailers are visible
  async verifyRetailerPricing(): Promise<void> {
    for (const button of this.retailerButtons) {
      await this.waitForElement(button);  // Wait for the retailer button to appear
      await button.isVisible();  // Ensure button is visible
    }
  }
}
