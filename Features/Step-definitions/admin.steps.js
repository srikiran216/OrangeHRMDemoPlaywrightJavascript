
const { Given, Then, When } = require ("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const AdminPage = require("../../Pages/AdminPage");


Then('user navigate to Admin page',async function(){
    await this.adminPage.navigateToAdmin();
})


Then('user management title should be display',async function(){
    const text = await this.adminPage.getAdminPageHeading();
    await expect(text).toContain("User Management");
})
