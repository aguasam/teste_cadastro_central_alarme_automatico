// Generated by Selenium IDE
//const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('teste', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('teste', async function() {
    // Test name: teste
    // Step # | name | target | value | comment
    // 1 | open | https://10.100.20.101/admin/login_login.action |  | 
    await driver.get("https://10.100.20.101/admin/login_login.action")
    // 2 | click | id=loginName |  | 
    await driver.findElement(By.id("loginName")).click()
    // 3 | type | id=loginName | system | 
    await driver.findElement(By.id("loginName")).sendKeys("system")
    // 4 | type | id=loginPass | admin123 | 
    await driver.findElement(By.id("loginPass")).sendKeys("admin123")
    // 5 | click | id=btnLogin |  | 
    await driver.findElement(By.id("btnLogin")).click()
    // 6 | selectFrame | index=0 |  | 
    await driver.switchTo().frame(0)
    // 7 | click | xpath=//button[@type='button'] |  | 
    await driver.findElement(By.xpath("//button[@type=\'button\']")).click()
    // 8 | selectFrame | relative=parent |  | 
    await driver.switchTo().defaultContent()
    // 9 | selectFrame | index=1 |  | 
    await driver.switchTo().frame(1)
    // 10 | mouseOver | css=.with-icon-th:nth-child(4) |  | 
    {
      const element = await driver.findElement(By.css(".with-icon-th:nth-child(4)"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 11 | mouseOut | css=.with-icon-th:nth-child(4) |  | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 12 | mouseOver | css=.topbar-button:nth-child(7) > .pass-text |  | 
    {
      const element = await driver.findElement(By.css(".topbar-button:nth-child(7) > .pass-text"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 13 | mouseOut | css=.topbar-button:nth-child(7) > .pass-text |  | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 14 | mouseOver | css=.fourthMenu > .selected |  | 
    {
      const element = await driver.findElement(By.css(".fourthMenu > .selected"))
      await driver.actions({ bridge: true }).moveToElement(element).perform()
    }
    // 15 | mouseOut | css=.fourthMenu > .selected |  | 
    {
      const element = await driver.findElement(By.CSS_SELECTOR, "body")
      await driver.actions({ bridge: true }).moveToElement(element, 0, 0).perform()
    }
    // 16 | selectFrame | relative=parent |  | 
    await driver.switchTo().defaultContent()
    // 17 | click | id=operate.sign.out |  | 
    await driver.findElement(By.id("operate.sign.out")).click()
    // 18 | click | id=ok |  | 
    await driver.findElement(By.id("ok")).click()
    // 19 | close |  |  | 
    await driver.close()
  })
})
