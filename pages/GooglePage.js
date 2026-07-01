class GooglePage {

    constructor(page) {
        this.page = page;
    }

    async navigateToGoogle() {
        await this.page.goto('https://www.google.com');
    }
}

module.exports = { GooglePage };