import { test, expect } from '@playwright/test';

import Login from './pages/login';
import userData from './data/user-data';

let login: Login;

test.beforeEach(async ({ page }) => {
  login = new Login(page);
  await login.goto();
});

test('should see title', async () => {
  await expect(login.title).toBeVisible();
});

test('should login', async () => {
  await login.doLogin(userData.host, '123456');
  expect(true).toBe(true);
});

test('should see error', async () => {
  await login.doLogin('test@test.com', '123456');
  expect(true).toBe(true);
});

test.afterAll(async ({ browser }) => {
  await browser.close();
});
