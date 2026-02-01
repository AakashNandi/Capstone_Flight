import { test } from '@playwright/test';
// Update the path below to the actual location of your testData file if needed
import testData from '../test-data/movies.json'; // adjust the path as necessary
// import { RetailersPage } from '../RetailersPage'; // adjust the path as needed
import { RetailersPage } from '../pages/RetailersPage'; // update the path if the file is in 'pages' folder
import { MoviePage } from '../pages/MoviePage'; // updated the path to match the 'pages' folder
import { HomePage } from '../pages/HomePage'; // updated the path to match the 'pages' folder

for (const movie of testData.movies) {
  test(
    `Validating retailer price for movie: ${movie.name} | Retailer: ${movie.retailer}`,
    async ({ page }) => {

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