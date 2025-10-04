import { expect } from '@wdio/globals'
import FacePage from '../../pageobjects/faceAPI.page.js'

describe('FaceAPI site smoke', () => {
    it('should load FaceAPI root and show content', async () => {
        await FacePage.open()
        await FacePage.logger({ MESSAGE: " awesome" })


    })
})
