// import { $ } from '@wdio/globals'
import Page from './page.js'

class FacePage extends Page {

    //Cookie Banner
    get cookieBannerContainer () {
        return $('//div[@class="cookiebanner__container"]/h1[text()="About cookies on this site"]/..')
    }

    get acceptAllCookiesBtn () {
        return this.cookieBannerContainer.$('//button[text()=" Accept all cookies "]')
    }

    async checkAndColapseCookieBaner (){
    const cookieBannerContainer = await this.cookieBannerContainer;
    let isCookieBannerContainerDisplayed = await cookieBannerContainer.isDisplayed({ withinViewport: true });
    this.logger({MESSAGE: `FacePage.checkAndColapseCookieBaner(): isCookieBannerContainerDisplayed = ${isCookieBannerContainerDisplayed}`})
    if(isCookieBannerContainerDisplayed){
        const acceptAllCookiesBtn = await this.acceptAllCookiesBtn;
        await acceptAllCookiesBtn.click();
        isCookieBannerContainerDisplayed = await cookieBannerContainer.isDisplayed({ withinViewport: true });
    }
    expect(isCookieBannerContainerDisplayed).toBe(false);
    };
    //End of Cookie Banner

    //Form "Let's Talk Business" locators
    get firstNameFieldInput () {
        return $('//h2[text()="Let\'s Talk Business"]/..//label/span[text()="First name"]/../..//input')
    }

    get lastNameFieldInput () {
        return $('//h2[text()="Let\'s Talk Business"]/..//label/span[text()="Last name"]/../..//input')
    }

    // End of Form "Let's Talk Buisiness" locators
    
    async open () {
        await browser.setWindowSize(1920, 1080);
        await super.open("https://faceapi.regulaforensics.com/")
    }

   
}

export default new FacePage()
