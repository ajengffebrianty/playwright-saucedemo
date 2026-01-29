import { Locator, Page } from "@playwright/test"
import { BasePage } from "./BasePage"

export class LoginPage extends BasePage {

    constructor(page: Page) {
        super(page)
    }
    private usernameField: string = '#user-name'
    private passwordField: string = '#password';
    private loginButton: string = '#login-button';
    private errorMessage: string = '[data-test="error"]';

    async goto(): Promise<void> {
    await this.navigateTo('/');
    await this.waitForPageLoad();
  }

    async enterUsername(username: string) {
        await this.sendKeys(this.usernameField, username)
    }
    async enterPassword(password: string) {
        await this.sendKeys(this.passwordField, password)
    }

    async clickLogin() {
        await this.click(this.loginButton)
    }

    
}