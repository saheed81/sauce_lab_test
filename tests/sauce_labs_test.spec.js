const {test, expect} = require('@playwright/test')

test('Sauce Lab Test', async ({page}) => {

await page.goto('https://www.saucedemo.com/')
await expect(page).toHaveTitle('Swag Labs')
await page.pause ()
await page.click('id=user-name')
await page.locator('id=user-name').fill('standard_user')
await page.pause ()
await page.click('id=password')
await page.locator('id=password').fill('secret_sauce')
page.click('id=login-button')
await page.pause ()
await page.click('id=add-to-cart-sauce-labs-fleece-jacket')
await page.pause ()
})