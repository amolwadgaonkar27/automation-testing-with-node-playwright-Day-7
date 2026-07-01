const { test, expect } = require('../fixtures/LoginFixture');
const { InventoryPage } = require('../pages/InventoryPage');

test.describe('SauceDemo Valid Login Tests', () => {

    test('Valid Login - Verify Inventory Page', async ({ loggedInPage }) => {

        const inventoryPage = new InventoryPage(loggedInPage);

        await inventoryPage.verifyInventoryPage();

        await expect(loggedInPage).toHaveURL(/inventory/);

        await expect(inventoryPage.pageTitle)
            .toHaveText('Products');
    });

});