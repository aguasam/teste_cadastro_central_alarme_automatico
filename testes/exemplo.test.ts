const {By, Key, Builder} = require("selenium-webdriver");
require("chromedriver");

async function example(){
    var pesquisa = 'testes automaticos com selenium'

    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('http://google.com');

    await driver.findElement(By.name('q')).sendKeys(pesquisa, Key.RETURN);

    var title = await driver.getTitle();
    console.log(' Title is: ', title);

    await driver.quit();
}

example()