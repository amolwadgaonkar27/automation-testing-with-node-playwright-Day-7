const { test, expect } = require('../fixtures/loginFixture');

const { InventoryPage } = require('../pages/InventoryPage');
const { CartPage } = require('../pages/CartPage');

test('Sort products and verify cart items', async ({ loggedInPage }) => {

    const inventoryPage = new InventoryPage(loggedInPage);
    const cartPage = new CartPage(loggedInPage);

    await inventoryPage.sortProducts('lohi');

    const prices = await inventoryPage.getPrices();

    const sortedPrices = [...prices]
        .sort((a, b) => a - b);

    expect(prices).toEqual(sortedPrices);

    console.log(
        'Products sorted correctly by Price Low -> High'
    );

    await inventoryPage.sortProducts('az');

    const productNames =
        await inventoryPage.getProductNames();

    const sortedNames =
        [...productNames].sort();

    expect(productNames).toEqual(sortedNames);

    console.log(
        'Products sorted correctly by Name A -> Z'
    );

    await inventoryPage.addProduct(0);
    await inventoryPage.addProduct(1);

    await expect(cartPage.cartBadge)
        .toHaveText('2');

    await cartPage.openCart();

    await expect(cartPage.cartItems)
        .toHaveCount(2);

    console.log(
        '2 products successfully added to cart'
    );
});