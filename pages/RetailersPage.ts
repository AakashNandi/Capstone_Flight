import { Page, expect } from '@playwright/test';

export class RetailersPage {
  constructor(private page: Page) {}

  async clickRetailerAndValidate(retailerName: string) {

    // Dynamic retailer button (partial match)
    const retailerButton = this.page.getByRole('button', {
      name: new RegExp(retailerName, 'i')
    });

    // Wait & click
    await expect(retailerButton).toBeVisible({ timeout: 15000 });
    await retailerButton.click();

    // Validation on retailer page
    await expect(
      this.page.getByRole('link', { name: 'Sign Up - Free' })
    ).toBeVisible();
  }
}