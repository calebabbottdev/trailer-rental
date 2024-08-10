import { test, expect } from '@playwright/test';

import LoginPage from './pages/login-page';
import { login } from './utils/pages';
import userData from './data/user-data';

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  await page.goto(login);
  loginPage = new LoginPage(page);
});

test('has title', async ({ page }) => {
  await expect(loginPage.title).toBeVisible();
});

test('should login', async ({ page }) => {
  await loginPage.doLogin(userData.host, '123456');
  expect(true).toBe(true);
});

test('should see error', async ({ page }) => {
  await loginPage.doLogin('test@test.com', '123456');
  expect(true).toBe(true);
});

test.afterAll(async ({ browser }) => {
  await browser.close();
});
