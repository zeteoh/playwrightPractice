import {expect, test} from "@playwright/test"

test("Interact with frames", async ({ page }) => {
    await page.goto("https://Letcode.in/frame");
    const allframes = page.frames();
    console.log("No. of frames: " + allframes.length);

    const frame = page.frameLocator("#firstFr")
    await frame.locator("input[name='fname']").fill("zteoh");
    await frame.locator("input[name='Lname']").fill("teoh");

    const innerFrame = frame.locator("iframe[src='innerFrame']")
    innerFrame.locator("input[name='email']").fill("zlteoh22@gmail.com")

    await frame.locator("input[name='fname']").fill("Letcode")
    await page.waitForTimeout(3000);
})