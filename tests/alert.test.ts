import { expect, test } from "@playwright/test"

test("handling alerts", async({page}) => {
    await page.goto("https://www.Lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog", async (alert) => {
        const text = alert.defaultValue();
        console.log(text)
        await alert.accept("zlteoh");
    })
    await page.locator("button:has-text('Click Me')").nth(1).click();
    expect(page.locator("id=confirm-demo")).toContainText("'zlteoh'")

    await page.goto("https://www.Lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.click("//button[@data-target='#myModal']")
    await page.click("(//button[text()='Save Changes'])[1]")
})

test("modal alerts", async({page}) => {
    await page.goto("https://www.Lambdatest.com/selenium-playground/bootstrap-modal-demo")
    await page.click("//button[@data-target='#myModal']")
    await page.click("(//button[text()='Save Changes'])[1]")
})