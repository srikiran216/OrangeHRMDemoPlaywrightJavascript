


class LoginPage {

    constructor(page){
        this.page=page;
    }
    async open(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    }
    async login(username,password){
        await this.page.getByPlaceholder("Username").fill(username);
        await this.page.locator("//*[@type='password']").fill(password);
        await this.page.locator("//button[@type='submit']").click();
    }

    async getDashboardText(){
        return this.page.locator("//h6[text()='Dashboard']").textContent();
    }

    async getInvalidCredentialText(){
        return this.page.locator("//p[text()='Invalid credentials']").textContent();
    }
    

}


module.exports = LoginPage;