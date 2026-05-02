

class AdminPage{
    
    constructor(page){
        this.page=page;
    }

    async navigateToAdmin(){
        await this.page.locator("//span[text()='Admin']").click(); 
    }

    async getAdminPageHeading(){
        return await this.page.locator("//*[@class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-level']").textContent();
    }

    async addAdmin(){
        await this.page.locator("//button[text()=' Add ']").click();
        await this.page.locator("(//label[text()='User Role']/ancestor::div)[last()-1]//div[text()='-- Select --']").click();
        await this.page.locator("(//span[text()='Admin'])[2]").click();
    }
    /*async updateRole(username, actualName){  //Abigail Cartwright, Abigail Arden Cartwright
        await this.page.getByPlaceholder("Type for hints...").fill(username);
        await this.page.locator(`//*[text()='${actualName}']`).click();
        await this.page.locator("//*[text()=' Search ']").click();
    }*/
}

module.exports = AdminPage;