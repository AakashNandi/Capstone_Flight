// tests/moviePricing.spec.ts
import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { MovieDetailsPage } from '../pages/MovieDetailsPage';
import { RetailersPage } from '../pages/RetailersPage';
import { getTestData } from '../utils/dataProvider';

test.describe('Movie Pricing Tests', () => {
  const moviePricingData = getTestData('moviePricing');  // Load movie pricing data from JSON

  // Ensure that moviePricingData is an array before using forEach
  if (Array.isArray(moviePricingData)) {
    moviePricingData.forEach((data: { movie: string, expectedRetailers: string[] }) => {
      test(`Verify pricing for the movie: ${data.movie}`, async ({ page }) => {
        const homePage = new HomePage(page);
        const movieDetailsPage = new MovieDetailsPage(page);
        const retailersPage = new RetailersPage(page);

        await page.goto('/home');  // Navigate to the homepage

        // Search for the movie and select it
        await homePage.searchMovie(data.movie);
        await homePage.selectMovie(data.movie);

        // Click "See Retailers" and verify pricing
        await movieDetailsPage.clickSeeRetailers();
        
        // Verify that all expected retailers are displayed
        for (const retailer of data.expectedRetailers) {
          await expect(page.locator(`button:has-text("${retailer}")`)).toBeVisible();
        }
      });
    });
  } else {
    console.error('moviePricingData is not an array:', moviePricingData);
  }
});
