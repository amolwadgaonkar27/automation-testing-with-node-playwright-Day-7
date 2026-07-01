class CheckoutPage {

    constructor(page) {
        this.page = page;

        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.postalCode = page.locator('#postal-code');

        this.continueButton = page.locator('#continue');
        this.finishButton = page.locator('#finish');

        this.pageTitle = page.locator('.title');
        this.completeHeader = page.locator('.complete-header');
        this.completeText = page.locator('.complete-text');
    }

    async enterCheckoutDetails(first, last, zip) {
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.postalCode.fill(zip);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }

    async finishOrder() {
        await this.finishButton.click();
    }
}

module.exports = { CheckoutPage };