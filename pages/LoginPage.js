class LoginPage {

    constructor(page) {
        this.page = page;

        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMessage = page.locator('[data-test="error"]');
    }

    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.textContent();
    }

    async getUsernamePlaceholder() {
        return await this.usernameInput.getAttribute('placeholder');
    }

    async getPasswordPlaceholder() {
        return await this.passwordInput.getAttribute('placeholder');
    }

    async getLoginButtonText() {
        return await this.loginButton.getAttribute('value');
    }
}

module.exports = { LoginPage };