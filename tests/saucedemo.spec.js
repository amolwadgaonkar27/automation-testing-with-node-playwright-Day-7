const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');

test('Print placeholders from SauceDemo login page', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await loginPage.navigateToLoginPage();

    await expect(loginPage.usernameInput).toBeVisible();
    await expect(loginPage.passwordInput).toBeVisible();
    await expect(loginPage.loginButton).toBeVisible();

    const usernamePlaceholder =
        await loginPage.getUsernamePlaceholder();

    const passwordPlaceholder =
        await loginPage.getPasswordPlaceholder();

    const loginButtonText =
        await loginPage.getLoginButtonText();

    console.log(
        'Username Placeholder:',
        usernamePlaceholder
    );

    console.log(
        'Password Placeholder:',
        passwordPlaceholder
    );

    console.log(
        'Login Button Text:',
        loginButtonText
    );
});