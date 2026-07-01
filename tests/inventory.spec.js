const { test, expect } = require('../fixtures/loginFixture');
const { InventoryPage } = require('../pages/InventoryPage');

test('Verify inventory page elements and products', async ({ loggedInPage }) => {

    const inventoryPage = new InventoryPage(loggedInPage);

    await expect(loggedInPage).toHaveTitle('Swag Labs');

    await expect(loggedInPage).toHaveURL(/inventory/);

    await expect(inventoryPage.logo).toBeVisible();

    await expect(inventoryPage.inventoryContainer)
        .toBeVisible();

    const productCount =
        await inventoryPage.getProductCount();

    console.log(
        `Number of products loaded: ${productCount}`
    );

    expect(productCount).toBeGreaterThanOrEqual(6);
});