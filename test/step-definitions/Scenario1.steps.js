const {Given, When, Then } = require('@wdio/cucumber-framework')
const DashBoard  = require ('../pageobjects/Detail.page.js')
const _contants = require ('../../resources/constant.js');
const LoginPage = require('../pageobjects/login.page.js');
const env = require('../../resources/enviroment.json');
const auth = require('../../resources/auth.json');
const _common = require('../../utilities/commons.js')

Given(/^I am on the Automation Test Store login page$/,async ()=>{
	await LoginPage.openweb(env.LOGIN1);
});
// When(/^I login with  valid username and password$/, async ()=> {
// 	await LoginPage.login(auth.USERNAME1,auth.PASSWORD1);
	
// });
// Then(/^I should see i am on the account page$/,async ()=> {
// 	await LoginPage.verifyLoginSuccess();
// });
// When(/^I click on the Home icon$/, async() => {
// 	await LoginPage.openweb(env.TEST1);
	
// });
// Then(/^I should be on the Automation Test Store homepage$/, async() => {
// 	await LoginPage.verifyLoginSuccess(auth.FirstName);
// });

// When(/^I click on MAKEUP Category$/, async() => {
// 	await DashBoard.clickOnMakeUp();
	
// });

// Then(/^I can see MAKEUP page is displayed$/, async() => {
// 	await _common.expectEqual(_contants.MAKEUP)
// });

// Then(/^Verify the Sort By fillter Default as Date Old > New$/, () => {
// 	return true;
// });
