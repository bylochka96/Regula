import { $ } from '@wdio/globals'
import Page from './page.js'

class FacePage extends Page {
    get appRoot () {
        // many single-page apps have a root div or h1; we'll check body and a likely header
        return $('body')
    }

    get headerTitle () {
        // try to find a visible heading on the FaceAPI page
        return $('h1, h2, h3')
    }

    async open () {
        // open relative to baseUrl (set to faceapi.regulaforensics.com)
        return super.open("https://faceapi.regulaforensics.com/")
    }
}

export default new FacePage()
