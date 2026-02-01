import { Page, expect } from '@playwright/test';

export class RetailersPage {
  private retailersSection!: ReturnType<Page['locator']>;
  private retailerButtons!: ReturnType<Page['locator']>;

  constructor(private page: Page) {
    this.retailersSection = this.page.locator('section:has-text("Retailers")');
    this.retailerButtons = this.retailersSection.locator('button');
  }

  async validateFirstThreeRetailers() {
    // 1) Close blocking modal if it exists
    const closeBtn = this.page.getByRole('button', { name: /close/i });
    if (await closeBtn.isVisible().catch(() => false)) {
      await closeBtn.click();
    }

    // 2) Wait for retailers section to be visible
    await expect(this.retailersSection).toBeVisible();

    // 3) Wait until at least one retailer button appears
    await expect(this.retailerButtons.first()).toBeVisible();

    const count = await this.retailerButtons.count();
    const limit = Math.min(count, 3);

    for (let i = 0; i < limit; i++) {
      const retailer = this.retailerButtons.nth(i);
      await expect(retailer).toBeVisible();
      console.log(`Retailer ${i + 1}: ${await retailer.innerText()}`);
    }
  }
}