import { expect, Page } from "@playwright/test"
import { BasePage } from "./BasePage"

export class InventoryPage extends BasePage {
    constructor(page: Page) {
        super(page)
    }

    private inventoryContainer: string = '.inventory_container';
    private shoppingCartIcon: string = '.shopping_cart_link';

    async verifySuccessfulLogin(): Promise<void> {
    await expect(this.page.locator(this.inventoryContainer)).toBeVisible();
    await expect(this.page.locator(this.shoppingCartIcon)).toBeVisible();
  }
}