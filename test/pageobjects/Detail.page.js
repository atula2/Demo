const Page = require ('./page');
const {ITEMDETAIL} = require('Resources/item.json')

class ItemDetail extends Page{
    get hplMakeUp(){
        return $('//a[contains(@href,"path=36") and contains(text(),"MAKEUP")]');

    }
    get txtDetail(){
        return $('//a[@class="breadcrumbs"]');
    }

    async clickOnMakeUp()
    {
        await this.hplMakeUp.click();
        
    }
    async verifyDetailPage(){
        await _waits.waitForSecond(3);
        return expect( await this.txtDetail.getText()).toEqual(ITEMDETAIL);

    }

}
module.exports = new ItemDetail();