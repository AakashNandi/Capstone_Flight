import { Page } from '@playwright/test';

export class HomePage {
  private searchButton: any;
  private searchBox: any;

  constructor(private page: Page) {
    this.searchButton = this.page.getByRole('button', { name: ' Search' });
    this.searchBox = this.page.getByRole('searchbox', { name: 'Search' });
  }

  private movieLink = (movieName: string) =>
    this.page.getByRole('link', { name: movieName });

  async searchAndSelectMovie(movieName: string) {
    await this.searchButton.click();
    await this.searchBox.fill(movieName);
    await this.movieLink(movieName).click();
  }
}