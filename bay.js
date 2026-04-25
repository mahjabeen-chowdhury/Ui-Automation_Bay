import {By,Key,Builder,Browser, until} from "selenium-webdriver";   
 import { expect } from "chai";   
  const selectedproduct = "Men Summer - Sandal - Jintao" 

  async function bayRun() {

    const driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    await driver.get("https://www.amarbay.com/");  

    
    await driver.findElement(By.xpath("//button[@class='search__button']")).click();
    await driver.sleep(2000);
    await driver.findElement(By.xpath("//input[@name='search']")).sendKeys("men summer");
    await driver.findElement(By.xpath("//input[@name='search']")).sendKeys(Key.ENTER);
    await driver.sleep(2000);

//3rd product

    await driver.findElement(By.xpath("(//div[@class='product-box'])[1]")).click();
    await driver.sleep(2000);  
    
//size   

    await driver.findElement(By.xpath("(//span[@class='check-span cover'])[2]")).click();
    await driver.sleep(1000);

//select random quantity (1–3)

    let qtyPlusBtn = await driver.findElement(By.xpath("//button[contains(.,'+')]"));

    let randomQty = Math.floor(Math.random() * 3) + 1;

    for (let i = 1; i < randomQty; i++) {
      await qtyPlusBtn.click();

    }

//add to cart

    await driver.findElement(By.xpath("//button[contains(.,'Add to cart')]")).click();
    await driver.sleep(1000);

//next enter mpobile number

   await driver.findElement(By.xpath("//input[@placeholder='mobile number.....']"));
   await driver.findElement(By.xpath("//input[@placeholder='mobile number.....']")).sendKeys("01708888888");

//next button after entering mobile number

   await driver.findElement(By.xpath("//button[contains(text(),'Next')]")).click();
   await driver.sleep(1000);
  
//OTP
    const otpField = await driver.wait(until.
    elementLocated(By.xpath("//input[contains(@placeholder,'OTP')]")),
    5000);

    await driver.wait(until.elementIsVisible(otpField), 
    5000);

    await otpField.clear();
    await otpField.sendKeys("123456");

  //submit button
    const verifyBtn = await driver.wait(
      until.elementLocated(By.xpath("//button[contains(text(),'Sign in')]"))
    );
    await verifyBtn.click();

    console.log(" OTP Submitted");

   
//checkout

     await driver.findElement(By.xpath("//a[@href='/checkout']")).click();



//validate the product in the cart

    const actualProduct = await driver.findElement(By.xpath("//p[contains(text(),'Men Summer')]")).getText();

    expect(selectedproduct).to.equal(actualProduct);
  
    await driver.quit();
  

  }

  bayRun();


  