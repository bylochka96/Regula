import { expect } from '@wdio/globals'
import FacePage from '../../pageobjects/faceAPI.page.js'

describe('FaceAPI site smoke', () => {
    it('should load FaceAPI root and show content', async () => {
        await FacePage.open()

        await expect(FacePage.appRoot).toBeExisting()
        await expect(FacePage.headerTitle).toBeExisting()

        // simple content length check
        const text = await (await FacePage.appRoot).getText()
        expect(text.length).toBeGreaterThan(10)
    })
})
