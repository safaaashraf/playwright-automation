// pages/SignUpPage.js
import { expect } from '@playwright/test';

export class SignUpPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.signUpLink = page.locator('//a[text()="Sign up"]');
    this.usernameInput = page.getByRole('textbox', { name: 'Username:' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password:' });
    this.signUpButton = page.getByRole('button', { name: 'Sign up' });
  }

  async openSignUp() {
    await this.signUpLink.click();
  }

  async signUp(username, password) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.signUpButton.click();
  }

  async assertSignUpSuccess() {
    
   await expect(this.page.locator('text=Sign up successful')).toBeVisible();
  }
}
