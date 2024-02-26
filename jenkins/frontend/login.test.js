import { describe, test, expect, beforeAll, afterAll } from "@jest/globals";
const { Builder, By } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

describe("회원가입", () => {
  //   const a = 1,
  //     b = 2;
  let driver;

  beforeAll(async () => {
    driver = await new Builder()
      .forBrowser("chrome")
      .setChromeOptions(new chrome.Options().addArguments("--headless"))
      .build();

    await driver.get("http://www.bookspedia.kro.kr/");
  }, 30000);

  afterAll(async () => {
    await driver.quit();
  }, 40000);

  test("정상 케이스 테스트", async () => {
    const login_btn1 = await driver.findElement(By.id("loginBtn"));
    login_btn1.click();

    const input_id = await driver.findElement(By.id("emailText"));
    input_id.sendKeys("kimhyunkyun123@gmail.com");
    const input_pw = await driver.findElement(By.id("passwordText"));
    input_pw.sendKeys("qwer1234!!");

    const login_btn2 = await driver.findElements(By.className("login-box-form-button"));
    login_btn2[0].click();

    const mypageBtn = await driver.findElements(By.className("mypageBtn"));
    expect(mypageBtn).not.toBe(null);

    // expect(a + b).toEqual(3);
  });
  //   test("ID 입력 안했을 때 테스트", () => {
  //     const { Builder, By } = require("selenium-webdriver");

  //     (async function example() {
  //       let driver = await new Builder().forBrowser("chrome").build();
  //       await driver.get("http://www.bookspedia.kro.kr/");

  //       const login_btn1 = await driver.findElement(By.id("loginBtn"));
  //       login_btn1.click();

  //       const input_pw = await driver.findElement(By.id("passwordText"));
  //       input_pw.sendKeys("qwer1234!!");

  //       const login_btn2 = await driver.findElements(By.className("login-box-form-button"));
  //       login_btn2[0].click();
  //     })();

  //     // expect(a + b + 2).toEqual(3);
  //   });
  //   test("PW 틀렸을 때 테스트", () => {
  //     const { Builder, By } = require("selenium-webdriver");

  //     (async function example() {
  //       let driver = await new Builder().forBrowser("chrome").build();
  //       await driver.get("http://www.bookspedia.kro.kr/");

  //       const login_btn1 = await driver.findElement(By.id("loginBtn"));
  //       login_btn1.click();

  //       const input_id = await driver.findElement(By.id("emailText"));
  //       input_id.sendKeys("kimhyunkyun123@gmail.com");
  //       const input_pw = await driver.findElement(By.id("passwordText"));
  //       input_pw.sendKeys("qwer1234!!!!");

  //       const login_btn2 = await driver.findElements(By.className("login-box-form-button"));
  //       login_btn2[0].click();
  //     })();

  //     // expect(a + b).toEqual(3);
  //   });
});
