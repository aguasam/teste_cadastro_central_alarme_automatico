//const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

async function example(){
    var login = 'system'
    var senha = 'admin123'

    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://10.100.20.101/admin/login_login.action');

    await driver.findElement(By.id('details-button')).click();
    await driver.findElement(By.id('proceed-link')).click();

    await driver.findElement(By.id('loginName')).sendKeys(login, Key.RETURN);
    await driver.findElement(By.id('loginPass')).sendKeys(senha, Key.RETURN);

    await driver.findElement(By.id('btnLogin')).click();

    await sleep(10000);

    //await driver.findElement(By.linkText('Dispositivo')).click();
    await driver.findElement(By.xpath('button[@type=button]')).click();
    //await driver.quit();
}

example()