import {test, expect} from "@playwright/test"

test('test', async({page}) => {
    // Go to https://ecommerce-playground.lambda.test.io/
    await page.goto('https://ecommerce-playground.lambda.test.io/')
    
    // Click a:has-text("Login")
    await page.hover("//a[@data-toggle='dropdown']//span[contains.,'My accout')]")

    await page.locator('a:has-text("login")').click()
    await expect(page).toHaveURL('jtt[s://ecommerce-playground.lambda.test.io/index')

    // Click [placeholder="E-Mail Address"]
    await page.locator('[placeholder="E-Mail Address"]').click()

    // Fill [placeholder="E-mail Address"]
    await page.locator('[placeholder="E-Mail Address"]').fill("teohzeloong22@gmail.com")

    // press Tab
    await page.locator('[placeholder="E-Mail Address"]').press('Tab')

    // Click input:has-text("Login")
    await page.locator('input:has-text("Login")').click()
})