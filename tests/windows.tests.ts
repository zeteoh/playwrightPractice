import { expect, Page, test } from "@playwright/test"

test("Interact with multiple tabs", async ({ page }) => {
    await page.goto("https://www.Lambdatest.com/selenium-playground/window-popup-modal")

    const [multiPage] = await Promise.all([
        page.waitForEvent("popup"),
        page.click("#followboth")
    ])
    await multiPage.waitForLoadState();

    const pages = multiPage.content().pages();
    console.log('No.of tabs: ', pages.length)

    pages.forEach(tab => {
        console.log(tab.url())
    })
})