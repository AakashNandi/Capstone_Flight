import { Page, expect } from '@playwright/test';

export class RetailersPage {
  constructor(private page: Page) {}

  private retailerButtons =
    this.page.locator('button:has-text("$")');

  async validateFirstThreeRetailers() {
    const count = await this.retailerButtons.count();
    const limit = Math.min(count, 3);

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < limit; i++) {
      const retailer = this.retailerButtons.nth(i);
      await expect(retailer).toBeVisible();
      console.log(`Retailer ${i + 1}: ${await retailer.innerText()}`);
    }
  }
}