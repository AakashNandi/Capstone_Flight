// import { test, expect } from '@playwright/test';

// test('test', async ({ page }) => {
//   await page.goto('https://moviesanywhere.com/home');
//   await page.getByRole('button', { name: ' Search' }).click();
//   await page.getByRole('searchbox', { name: 'Search' }).fill('Tenet');
//   await page.getByRole('link', { name: 'Tenet' }).click();
//   await page.getByRole('button', { name: 'See Retailers' }).click();
//   await expect(page.getByRole('button', { name: 'iTunes $14.99 4K' })).toBeVisible();
//   await expect(page.getByRole('button', { name: 'Prime Video $14.99 4K' })).toBeVisible();
//   await expect(page.getByRole('button', { name: 'Fandango at Home $14.99 4K' })).toBeVisible();
//   await expect(page.getByRole('button', { name: 'Google Play/YouTube $14.99 4K' })).toBeVisible();
// });