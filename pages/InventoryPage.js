class InventoryPage {

    constructor(page) {
        this.page = page;

        this.pageTitle = page.locator('.title');
        this.logo = page.locator('.app_logo');
        this.inventoryContainer = page.locator('.inventory_container');
        this.products = page.locator('.inventory_item');

        this.sortDropdown = page.locator('.product_sort_container');
        this.productPrices = page.locator('.inventory_item_price');
        this.productNames = page.locator('.inventory_item_name');
        this.addToCartButtons = page.locator('.btn_inventory');
    }

    async verifyInventoryPage() {
        await this.page.waitForURL(/inventory/);
    }

    async getProductCount() {
        return await this.products.count();
    }

    async sortProducts(option) {
        await this.sortDropdown.selectOption(option);
    }

    async getPrices() {
        const priceElements =
            await this.productPrices.allTextContents();

        return priceElements.map(price =>
            parseFloat(price.replace('$', ''))
        );
    }

    async getProductNames() {
        return await this.productNames.allTextContents();
    }
    async addFirstProductToCart() {
        await this.addToCartButtons.first().click();
    }
    
    async addProduct(index) {
        await this.addToCartButtons.nth(index).click();
    }
}

module.exports = { InventoryPage };