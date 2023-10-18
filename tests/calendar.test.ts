import { test } from "@playwright/test"
import moment from "moment"

test("Calendar demo using fill function", async({ page }) => {
    await page.goto("https://www.Lambdatest.com/selenium-playground/bootstrap-date-picker-demo")
    let date = '1994-12-04'

    await page.fill("id=birthday", date)
    await page.waitForTimeout(3000)
})

test("Calendar demo using moment", async({ page }) => {
    await page.goto("https://www.Lambdatest.com/selenium-playground/bootstrap-date-picker-demo")

    await selectDate(12, "December 2017")

    await page.reload()

    await selectDate(5, "December 2023")

    await page.reload()

    await selectDate(2, "July 2022")
    
    await page.waitforTimeout(3000)

    async function selectDate(date: number, dateToSelect: string){
        const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]")
        const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
        const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

        const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore()
        console.log("this Month? "+ thisMonth)

        while (await mmYY.textContent() != dateToSelect){
            if(thisMonth){
                await prev.click()
            }else{
                await next.click()
            }
        }

        await page.click(`//td[@class='day'][text()='${date}']`)
    }
})
