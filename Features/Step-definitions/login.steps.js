const { Given, Then, When } = require ("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const LoginPage = require("../../Pages/LoginPage");



Given('user is on login page',async function(){
    await this.loginPage.open();
});

When('user logs in with valid credentials',async function(){
    await this.loginPage.login("Admin","admin123");
});

When('user logs in with invalid username',async function(){
    await this.loginPage.login("Admin1234","admin123");
});

When('user logs in with invalid password',async function(){
    await this.loginPage.login("Admin","admin@123");
});

Then('dashboard should be displayed',async function(){
    const text = await this.loginPage.getDashboardText();
    await expect(text).toContain("Dashboard");
})


Then('error message should be displayed',async function(){
    const text = await this.loginPage.getInvalidCredentialText();
    await expect(text).toContain("Invalid credentials");
})



