class CartPage {

    constructor(page) {
        this.page = page;

        this.cartBadge = page.locator('.shopping_cart_badge');
        this.cartLink = page.locator('.shopping_cart_link');
        this.cartItems = page.locator('.cart_item');
        this.checkoutButton = page.locator('#checkout');
    }

    async openCart() {
        await this.cartLink.click();
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

module.exports = { CartPage };