const base = require('@playwright/test');
const { LoginPage } = require('../pages/LoginPage');
const loginData = require('../testData/LoginData.json');

exports.test = base.test.extend({

    loggedInPage: async ({ page }, use) => {

        const loginPage = new LoginPage(page);

        await loginPage.navigateToLoginPage();

        await loginPage.login(
            loginData.validUser.username,
            loginData.validUser.password
        );

        await use(page);
    }

});

exports.expect = base.expect;