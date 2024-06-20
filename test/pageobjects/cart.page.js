const Page = require("./page");

const _const = require('Resources/constant')
const _item = require('Resources/item.json')

const _wait = require('../utilities/waits');
const common = require("../utilities/common");
class AddToCartPage extends Page
{

   //#region<get element> 
    get imgToHover()
    {
        return $('//div[@class="thumbnail"]/a/img[contains(@src,"product03")]');
    }
    get hplView()
    {
        return $('//div[@class="thumbnail"]/div/a[contains(@href,"id=53") and contains(text(),"View")]');
    }
    get txtQuanity()
    {
        return $('//input[@id="product_quantity"]');
    }
    get btnAddToCart()
    {
        return $('//a[@class="cart"]');
    }
    get txtPrice()
    {
        return $('//div[@class="productprice"]/div/div[@class="productfilneprice"]');

    }
    get txtTotalPrice(){

        return $('//label[@class="control-label"]/span[@class="total-price"]');
    }
    //#endregion 

    //#region <function>
    async clickView()
    {
        await this.hplView.click();
        await _wait.waitUntilPageDetail(_const.LATESTPRODUCTS);
    }
    async enterQuanity(quanity)
    {
        await this.txtQuanity.setValue(quanity);
        return quanity;
    }
    async clickAddToCart()
    {
        await this.btnAddToCart.click();
        await _wait.waitUntilPageTitleMeet(_const.SHOPPINGCART);
    }
    async TotalPrice(total){
        let Price = (await this.txtPrice).getText();
        let total = Price * quanity;
        return total;


    }
    async expectTotalPrice(expectedNum) {
        let trimmedNum = expectedNum.toUpperCase().trim();
        return expect(await $(`//span[text()='${expectedNum}']`).getText()).toEqual(trimmedNum);
    } 
    //#endregion
}
module.exports= new AddToCartPage();
