const { TotalPrice } = require("../test/pageobjects/cart.page");

module.exports = {
    async sortBy(condition = RatingLow){
        //sort by cai gi do
        //neu ma condition = tu nho den lon => click on price low > high
    },
    async expectEqual(expectedText) {
        let trimmedString = expectedText.toUpperCase().trim();
        return expect(await $(`//h1//child::span[text()='${expectedText}']`).getText()).toEqual(trimmedString);
    },
    async verifyExisted(expectedName)
    {
        let trimmedName = expectedName.trim();
        return expect(await $(`//td[@class="align_left"]/a[text()='${expectedName}']`).getText()).toEqual(trimmedName);
    },
    async scrollTo(elem){
        await elem.scrollTo({ block:center,});
    }
    
}   