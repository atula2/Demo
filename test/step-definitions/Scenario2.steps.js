// const {Given, When, Then } = require('@wdio/cucumber-framework');
// const DashBoard  = require ('../pageobjects/Detail.page.js');
// const _contants = require ('../../resources/constant.js');
// const LoginPage = require('../pageobjects/login.page.js');
// const env = require('../../resources/enviroment.json');
// const auth = require('../../resources/auth.json');
// const _common = require('../../utilities/commons.js');
// const AddToCartPage = require('../pageobjects/cart.page.js');
// const _item = require('../../resources/item.json');
// const cart = require('../pageobjects/cart.page.js')


// Given(/^I am on the Automation Test Store login page$/, async () => {
// 	await LoginPage.openweb(env.LOGIN1);
// });
// // When(/^I login with  valid username and password$/, async() => {
// // 	await LoginPage.login(auth.USERNAME1,auth.PASSWORD1);
	
// // });

// // Then(/^I should see i am on the account page$/,async () => {
// // 	await LoginPage.verifyLoginSuccess();
// // });
// // When(/^I click on the Home icon$/, async() => {
// // 	await LoginPage.openweb(env.TEST1);
	
// // });

// // Then(/^I should be on the Automation Test Store homepage$/,async () => {
// // 	await LoginPage.verifyLoginSuccess(auth.FirstName);
// // });

// // When(/^I click on MAKEUP Category$/, async() => {
// // 	await DashBoard.clickOnMakeUp();
// // });

// // Then(/^I can see MAKEUP page is displayed$/,async () => {
// // 	await _common.expectEqual(_contants.MAKEUP)
// // });

// // When(/^I click the second item on grid$/, async() => {
// // 	await AddToCartPage.clickView();
// // });

// // Then(/^I can see the item detail$/, async() => {
// // 	await DashBoard.verifyDetailPage(_item.ITEMDETAIL);
// // });

// // When(/^I click Add to Cart$/, async() => {
// // 	await AddToCartPage.clickAddToCart(); 
// // });

// // When(/^I chose the quantity value$/, async() => {
// // 	await AddToCartPage.enterQuanity(QUANITY);
// // });

// // Then(/^Verify I can see the item in my shopping cart and total price$/, async() => {
// // 	expect(cart.expectTotalPrice).toEqual(cart.TotalPrice);
// // });
