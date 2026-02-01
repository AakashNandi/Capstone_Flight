import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MoviePage } from '../pages/MoviePage';
import { RetailersPage } from '../pages/RetailersPage';
import { getTestData } from '../utils/testDataUtil';

const testData = getTestData('movies.json');

test.describe('Movies Anywhere - Retailers Validation', () => {

  for (const movie of testData.movies) {

    test(`Validate retailers for movie: ${movie.name}`, async ({ page }) => {

      const homePage = new HomePage(page);
      const moviePage = new MoviePage(page);
      const retailersPage = new RetailersPage(page);

      await page.goto('https://moviesanywhere.com/home');

      await homePage.searchAndSelectMovie(movie.name);
      await moviePage.clickSeeRetailers();
      await retailersPage.validateFirstThreeRetailers();
    });
  }
});