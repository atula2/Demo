module.exports = {
    async waitForSecond(seconds){
        await browser.pause(seconds * 1000)
    },
    
    async waitUntilPageTitleMeet(Text){
        let trimmedString = Text.toUpperCase().trim();
        let element = $(`//h1//child::span[text()="${Text}"]`);
        await browser.waitUntil(async function(){
            return await element.getText() == trimmedString;
        },{
            timeout : 5000, timeoutMsg : `Element is not displayed`
        })
        
    },
    async waitUntilPageDetail(Text){
        let trimmedString = Text.toUpperCase().trim();
        let element = $(`//h2//child::span[text()="${Text}"]`);
        await browser.waitUntil(async function(){
            return await element.getText() == trimmedString;
        },{
            timeout : 5000, timeoutMsg : `Element is not displayed`
        })
        
    },
    async waitForBanner(timeout = 5000) {
        await browser.waitUntil(
            async () => {
                return await $('//div[@class="banner_container"]').isDisplayed();
            },
            {
                timeout: timeout,
                timeoutMsg: 'Banner is not displayed ' + timeout + 'ms',
                interval: 100
            }
        );
    }
    
}               