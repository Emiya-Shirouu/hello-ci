const { Builder, By } = require("selenium-webdriver");
const app = require("../../src/app");

const SELENIUM_URL = process.env.SELENIUM_URL || "http://localhost:4444/wd/hub";
const APP_HOST = process.env.APP_HOST || "host.docker.internal";

let server, driver;

beforeAll(async () => {
  server = app.listen(3000);
  driver = await new Builder().forBrowser("chrome").usingServer(SELENIUM_URL).build();
}, 30000);

afterAll(async () => {
  await driver.quit();
  server.close();
});

test("home page shows the header", async () => {
  await driver.get(`http://${APP_HOST}:3000`);
  const text = await driver.findElement(By.css("h1")).getText();
  expect(text).toBe("Welcome to CI/CD");
}, 30000);