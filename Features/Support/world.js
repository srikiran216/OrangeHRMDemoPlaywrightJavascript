const {setWorldConstructor} = require ("@cucumber/cucumber");


class customWorld {
    constructor (page){
        this.browser = null;
        this.context = null;
        this.page = null;

        //POM
        this.loginPage = null;
        this.adminPage = null;

    }
}

setWorldConstructor(customWorld);