import { test } from "@playwright/test"

test("handling dropdown", async ({ page }) => {
    await page.goto("https://www.Lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption("#select-demo", {
        index: 5
    })
    await page.waitForTimeout(3000);

    await page.selectOption('#multi-select', [
        {
            label: "Texas"
        }, {
            index: 2
        }, {
            value: "Washington"
        }
    ])
})

test("bootstrap dropdown", async ({ page }) => {
    await page.goto("https://www.Lambdatest.com/selenium-playground/jquery-dropdown-demo")
    await selectCountry("India");
    await selectCountry("Denmark");
    await selectCountry("South Africa");

    async function selectCountry(countryName){
        await page.click("#country+span");
        await page.locator("ul#select2-country-results")
            .locator("li", {
                hasText: countryName
            }).click();
    }
})