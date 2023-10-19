import { expect, test } from "../base/pomFixture"
import * as data from "../test-data/addToCart.test-data.json"

test.describe("Page object test demo", async () => {
    test("Register test_01", async ({ page, baseURL, registerPage}) => {
        await page.goto(`${baseURL}route=account/register`)
        await registerPage.enterFirstName(data.firstName)
        await registerPage.enterLasttName(data.lastName)
        await registerPage.enterEmail(data.email)
        await registerPage.enterTelephone(data.phone_numner)
        await registerPage.enterPassword(data.password)
        await registerPage.enterConfirmPassword(data.password)
        expect(registerPage.isSubcribeCheck()).toBeChecked();
        await registerPage.clickTermsandCondition()
        await registerPage.clickContinueToRegister()
    })
    
    test("Login test_02", async ({ page, baseURL, loginPage}) => {
        await page.goto(`${baseURL}route=account/login`)
        await loginPage.enterEmail(data.email);
        await loginPage.enterLoginPassword(data.password)
        await loginPage.clickLoginBtn();
        expect(await page.title()).toBe("My Account")
    })
    
    test("Add to cart test_03", async ({ page, baseURL, loginPage, homePage, specialHotPage}) => {
        await page.goto(`${baseURL}route=account/login`)
        await loginPage.login(data.email, data.password)
        await homePage.clickOnSpecialHotMenu();
        await specialHotPage.addFirstProductToTheCart();
        const isCardVisible = await specialHotPage.isToastVisible();
        expect(isCardVisible).toBeVisible()
    })
})