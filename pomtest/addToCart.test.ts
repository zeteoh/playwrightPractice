import { expect, test } from "@playwright/test"
import RegisterPage from "../pages/registerPage"
import LoginPage from "../pages/loginPage"
import HomePage from "../pages/homePage"
import SpecialHotPage from "../pages/SpecialHotPage"

const email = "zlteoh@gmail.com"
const password = "password123"
test.describe("Page object test demo", async () => {
    test("Register test_01", async ({ page, baseURL}) => {
        const register = new RegisterPage(page);
        await page.goto(`${baseURL}route=account/register`)
        await register.enterFirstName("zlteoh")
        await register.enterLasttName("teoh")
        await register.enterEmail(email)
        await register.enterTelephone("123132421")
        await register.enterPassword(password)
        await register.enterConfirmPassword(password)
        expect(register.isSubcribeCheck()).toBeChecked();
        await register.clickTermsandCondition()
        await register.clickContinueToRegister()
    })
    
    test("Login test_02", async ({ page, baseURL}) => {
        const login = new LoginPage(page);
        await page.goto(`${baseURL}route=account/login`)
        await login.enterEmail(email);
        await login.enterLoginPassword(password)
        await login.clickLoginBtn();
        expect(await page.title()).toBe("My Account")
    })
    
    test("Add to cart test_03", async ({ page, baseURL}) => {
        const login = new LoginPage(page);
        const homePage = new HomePage(page);
        const special = new SpecialHotPage(page);
        await page.goto(`${baseURL}route=account/login`)
        await login.login(email, password)
        await homePage.clickOnSpecialHotMenu();
        await special.addFirstProductToTheCart();
        const isCardVisible = await special.isToastVisible();
        expect(isCardVisible).toBeVisible()
    })
})