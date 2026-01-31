// pages/BasePage.ts
import { Page, Locator } from '@playwright/test';

export class BasePage {
  // Page object reference
  protected page: Page;

  // Constructor accepts the page instance from Playwright
  constructor(page: Page) {
    this.page = page;
  }

  // Method to navigate to a URL
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  // A helper method to wait for an element to be visible
  async waitForElement(locator: Locator): Promise<void> {
    await locator.waitFor({ state: 'visible' });
  }

  // A helper method to click an element
  async clickElement(locator: Locator): Promise<void> {
    await locator.click();
  }

  // A helper method to fill an input field
  async fillInputField(locator: Locator, text: string): Promise<void> {
    await locator.fill(text);
  }

  // A helper method to get the text of an element
  async getElementText(locator: Locator): Promise<string> {
  const text = await locator.textContent();
  return text || '';  // Fallback to empty string if null
}

}
