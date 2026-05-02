const { After, Before, setDefaultTimeout } = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const LoginPage = require("../../Pages/LoginPage");
const AdminPage = require("../../Pages/AdminPage");


setDefaultTimeout(60 * 1000);

Before(async function () {
    this.browser = await chromium.launch({ headless: false, args: ['--strart-maximized'] });
    this.context = await this.browser.newContext({ viewport: null });
    this.page = await this.context.newPage();

    //injection POM
    this.loginPage = new LoginPage(this.page);
    this.adminPage = new AdminPage(this.page);
});

After(async function () {
    await this.context.close();
    await this.browser.close();
});