import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';
import { LoginPage } from '../pages/LoginPage';
import { TestData } from '../test_data/TestData';
import { InventoryPage } from '../pages/InventoryPage';
test.describe('Sauce Demo Login', () => {
    let loginPage: LoginPage
    let inventoryPage: InventoryPage
    test.beforeEach('go to sauce demo', async ({ page }) => {
        loginPage = new LoginPage(page)
        inventoryPage = new InventoryPage(page)
        await loginPage.goto()
    })

    

    test('valid login', async ({ page }) => {
        await loginPage.enterUsername(TestData.VALID_USERNAME)
        await loginPage.enterPassword(TestData.VALID_PASSWORD)
        await loginPage.clickLogin()
        await inventoryPage.verifySuccessfulLogin()
    })
})