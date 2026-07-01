const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const { InventoryPage } = require('../pages/InventoryPage');

const loginData = require('../testData/loginData.json');

test.describe('SauceDemo Login Tests', () => {

    test('Invalid Login - Validate Error Message', async ({ page }) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            loginData.invalidUser.username,
            loginData.invalidUser.password
        );

        await expect(loginPage.errorMessage)
            .toBeVisible();

        await expect(loginPage.errorMessage)
            .toContainText(
                'Username and password do not match'
            );

        console.log(
            'Error Message:',
            await loginPage.getErrorMessage()
        );
    });

});

//Assignment 2- POM Implementation