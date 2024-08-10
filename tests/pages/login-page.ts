import { type Page, type Locator } from '@playwright/test';

class LoginPage {
  readonly page: Page;
  readonly title: Locator;
  readonly emailAddress: Locator;
  readonly password: Locator;
  readonly loginButton: Locator;
  readonly credentials: Locator;
  readonly error: Locator;

  constructor(page: Page) {
    this.page = page;
    this.title = page.getByRole('heading', { name: 'Login' });
    this.emailAddress = page.getByLabel('Email');
    this.password = page.getByLabel('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.credentials = page.getByTestId('credentials');
    this.error = page.getByTestId('error');
  }

  async fillEmailAddress(email: string) {
    await this.emailAddress.fill(email);
  }

  async fillPassword(password: string) {
    await this.password.fill(password);
  }

  async doLogin(email: string, password: string) {
    await this.fillEmailAddress(email);
    await this.fillPassword(password);
    await this.loginButton.click();
  }
}

export default LoginPage;
