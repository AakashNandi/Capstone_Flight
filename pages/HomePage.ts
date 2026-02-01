import { Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  private searchButton = this.page.getByRole('button', { name: ' Search' });
  private searchBox = this.page.getByRole('searchbox', { name: 'Search' });

  private movieLink = (movieName: string) =>
    this.page.getByRole('link', { name: movieName });

  async searchAndSelectMovie(movieName: string) {
    await this.searchButton.click();
    await this.searchBox.fill(movieName);
    await this.movieLink(movieName).click();
  }
}