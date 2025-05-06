// login.spec.js
const { test, expect } = require('@playwright/test');

test('Login Test', async ({ page }) => {
  await page.goto('https://example.com/login');

  await page.fill('#username', 'testuser');
  await page.fill('#password', 'securepassword');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('https://example.com/dashboard');
  await expect(page.locator('h1')).toHaveText('Welcome, testuser');
});
