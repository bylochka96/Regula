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

     async acceptedAllCookies (){
        await this.acceptAllCookiesBtn.click();
        expect(this.cookieBannerContainer.isDisplayed()).toBeFalse();
    }
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
