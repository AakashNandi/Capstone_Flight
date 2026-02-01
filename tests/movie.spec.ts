import { test } from '@playwright/test';
import testData from '../test-data/movies.json'; 
import { RetailersPage } from '../pages/RetailersPage'; 
import { MoviePage } from '../pages/MoviePage'; 
import { HomePage } from '../pages/HomePage'; 

// Loop through each movie in the test data
for (const movie of testData.movies) {
  test(
    // Test description: Validate retailer price for a specific movie and retailer
    `Validating retailer price for movie: ${movie.name} | Retailer: ${movie.retailer}`,
    async ({ page }) => {

      // Instantiating page objects 
      const homePage = new HomePage(page);
      const moviePage = new MoviePage(page);
      const retailersPage = new RetailersPage(page);

    
      await page.goto('https://moviesanywhere.com/home');

      await homePage.searchAndSelectMovie(movie.name);

      await moviePage.clickSeeRetailers();

      await retailersPage.clickRetailerAndValidate(movie.retailer);
    }
  );
}
