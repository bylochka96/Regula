import { browser, expect } from '@wdio/globals'
import FacePage from '../../pageobjects/faceAPI.page.js'

describe('FaceAPI E2E suite: ', () => {
    
    fit('should load FaceAPI root and show content', async () => {
        await FacePage.open()
        await FacePage.logger({ MESSAGE: " 1st one" })


        await FacePage.accceptedAllCookies();

        let firstNameInpuit = await FacePage.firstNameFieldInput;
        firstNameInpuit.scrollIntoView();
        await browser.pause(5*1000)
        expect(firstNameInpuit.isClicable()).toBeTruthy;


    })

    it('2nd one', async () => {
        await FacePage.open()
        await FacePage.logger({ MESSAGE: "2nd one", LOG_LEVEL: "debug"  })
    })

})
