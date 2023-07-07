// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async({ page }) => {
    await page.goto('https://togoplates.myshopify.com/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/togoplates/);
});

test('Get Past Linguine', async({ page }) => {
    await page.goto('https://togoplates.myshopify.com/');

    await page.getByRole('link', { name: 'Pasta Linguine' }).click();
    await page.getByRole('dialog', { name: 'Pasta Linguine' }).getByRole('button', { name: 'Add to Cart' }).click();
    await page.getByRole('button', { name: 'Close' }).click();
    await page.getByRole('button', { name: 'Cart Number of items in your cart: 1 Cart price $11.50 USD' }).click();
    await page.getByText('$11.50', { exact: true }).click();
});