import { test } from '@playwright/test';

import { SignUpPage } from '../Pages/SignUpPage';
import {loginPage} from '../Pages/LoginPage';


test('User can sign up successfully', async ({ page }) => {
  const signUpPage = new SignUpPage(page);

  await page.goto('https://www.demoblaze.com/');
  await signUpPage.openSignUp();
  await signUpPage.signUp('safaa998', '19949990');
  await signUpPage.assertSignUpSuccess(); 
});

test('User can log in and log out successfully', async ({ page }) => {
  const loginPage = new LoginPa
  ge(page);

  await page.goto('https://www.demoblaze.com/');
  await loginPage.openLogin();
  await loginPage.login('safaa998', '19949990');
  await loginPage.logout();
});
