// pages/HomePage.ts
import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';

export class HomePage extends BasePage {
  private searchButton: Locator;
  private searchInput: Locator;

  constructor(page: any) {
    super(page);  // Calling the constructor of the BasePage class
    this.searchButton = this.page.locator('[role="button"][name=" Search"]');
    this.searchInput = this.page.locator('[role="searchbox"][name="Search"]');
  }

  // Method to search for a movie
  async searchMovie(movieName: string): Promise<void> {
    await this.clickElement(this.searchButton);  // Use the click helper method from BasePage
    await this.fillInputField(this.searchInput, movieName);  // Use the fill helper method from BasePage
  }

  // Method to select a movie from the search results
  async selectMovie(movieName: string): Promise<void> {
    const movieLink = this.page.locator(`a:has-text("${movieName}")`);
    await this.clickElement(movieLink);  // Use the click helper method from BasePage
  }
}
