import {By,Key,Builder,Browser} from "selenium-webdriver";

  async function testRun() {
/*
    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.get("https://demo.evershop.io/");
    await driver.manage().window().maximize();
    await driver.sleep(5000);
    await  driver.quit();
*/


const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();

    await driver.get("https://demo.evershop.io/");    
    
    await driver.findElement(By.xpath("//a[@class='search__icon']")).click();
     await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys("Desk Pen Holder - Yellow");
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
     await driver.sleep(2000);


   // await driver.findElement(By.xpath("//li[@class='group selected']")).click();
    await driver.sleep(1000);  
    //await driver.findElement(By.xpath("//input[@name='qty']")).click();
    await driver.sleep(1000);  
    await driver.findElement(By.xpath("//button[text()='ADD TO CART']")).click();
    await driver.sleep(1000);  
    await driver.findElement(By.xpath("//button[text()='View Cart (1)']")).click();

    
}
testRun();

