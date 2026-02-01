import { Page, expect } from '@playwright/test';

export class RetailersPage {
  constructor(private page: Page) {}

  // Method to click a retailer and validate that the retailer page is loaded
  async clickRetailerAndValidate(retailerName: string) {
    
    const retailerButton = this.page.getByRole('button', {
      name: new RegExp(retailerName, 'i')  // Partial match for the retailer name, 'i' stands for ignore case
    });

    // Wait for the retailer button to be visible before clicking
    await expect(retailerButton).toBeVisible({ timeout: 15000 });
    await retailerButton.click(); 

    // Validate that the retailer's page contains the "Sign Up - Free" link after clicking
    await expect(
      this.page.getByRole('link', { name: 'Sign Up - Free' })
    ).toBeVisible(); 
  }
}
