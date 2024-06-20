const { $ } = require('@wdio/globals')
const Page = require('./page');
const {MYACCOUNT} = require('Resources/constant');



class LoginPage extends Page {
    
    get inputUsername () {
        return $('#loginFrm_loginname');
    }

    get inputPassword () {
        return $('#loginFrm_password');
    }

    get btnSubmit () {
        return $('button[type="submit"]');
    }
    get welcomeMessage() 
    { 
        return $('//div[@class="menu_text"]'); 
    }

    async login (username,password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    async verifyLoginSuccess( firstName) {
        await _waits.waitUntilPageTitleMeet(MYACCOUNT)
        const expectedMessage = `Welcome back ${firstName}`;
        return expect( await this.welcomeMessage.getText()).toEqual(expectedMessage);
    }

    async openweb (path) {
       await this.open(path);
     }
}

module.exports = new LoginPage();
