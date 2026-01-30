import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://phptravels.net/');
  await page.getByRole('combobox').first().selectOption('return');
  await page.locator('#flight_type').selectOption('first');
  await page.locator('input[name="from"]').click();
  await page.locator('input[name="from"]').fill('Delhi');
  await page.getByText('Delhi India').nth(1).click();
  await page.locator('input[name="to"]').click();
  await page.locator('input[name="to"]').fill('Kolkata');
  await page.getByText('Kolkata India').click();
  await page.locator('#departure').click();
  await page.locator('div:nth-child(19) > .datepicker-days > .table-condensed > thead > tr > .next > svg').click();
  await page.getByRole('cell', { name: '3' }).nth(1).click();
  await page.getByRole('cell', { name: '7', exact: true }).click();
  await page.getByRole('button', { name: 'Travellers' }).click();
  await page.getByRole('img').filter({ hasText: /^$/ }).nth(4).click();
  await page.locator('.dropdown-item.child_qty > .qty-box > .qtyBtn > .qtyInc > svg').click();
  await page.locator('.dropdown-item.infant_qty > .qty-box > .qtyBtn > .qtyInc > svg').click();
  await page.locator('#onereturn #flights-search').click();
  await expect(page.getByText('del ccu', { exact: true })).toBeVisible();
  await page.getByText('03-03-2026 - 07-03-2026', { exact: true }).click();
});


//pnpm exec playwright codegen https://phptravels.net/
//pnpm exec playwright test --headed