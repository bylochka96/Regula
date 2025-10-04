// import { $ } from '@wdio/globals'
import Page from './page.js'

class FacePage extends Page {

    get headerTitle () {
        return $('h1, h2, h3')
    }

    async open () {
        await browser.setWindowSize(1920, 1080);
        await super.open("https://faceapi.regulaforensics.com/")
    }
}

export default new FacePage()
