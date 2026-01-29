import { Page } from "@playwright/test"

export class BasePage {

    protected page;

    constructor(page: Page) {
        this.page = page
    }

    async navigateTo(url: string): Promise<void> {
        this.page.goto(url)
    }

    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
    }

    async getTitle(): Promise<string> {
        return await this.page.title();
    }

    async click(button: string): Promise<void> {
        await this.page.click(button)
    }

    async sendKeys(field: string, text: string): Promise<void> {
        await this.page.fill(field, text)
    }


}