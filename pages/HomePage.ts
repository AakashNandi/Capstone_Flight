import { Page } from '@playwright/test';

export class HomePage {
  private searchButton: any; // Button to initiate the search
  private searchBox: any;    // Search box to input movie name

  constructor(private page: Page) {
    // Initializes the searchButton and searchBox using Playwright's locator methods
    this.searchButton = this.page.getByRole('button', { name: ' Search' });
    this.searchBox = this.page.getByRole('searchbox', { name: 'Search' });
  }

  // Function to get a movie link by its name
  private movieLink = (movieName: string) =>
    this.page.getByRole('link', { name: movieName });

  // Search for a movie and select it
  async searchAndSelectMovie(movieName: string) {  //async makes sure the function will always return a promise
    
    await this.searchButton.click();
    
    await this.searchBox.fill(movieName);

    await this.movieLink(movieName).click();

    //await can only be used inside an async function.
    //It pauses the function until the promise is finished or has an error.
    
  }
}
