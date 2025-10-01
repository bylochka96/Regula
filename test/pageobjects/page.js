import { browser } from '@wdio/globals'

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
    /**
     * Opens a sub page of the page or an absolute URL.
     * If `path` starts with "http" it's treated as a full URL; otherwise
     * it is appended to the existing demo base used previously.
     * @param path path of the sub page (e.g. /path/to/page.html) or full url
     */
    open (path = '') {
        if (typeof path === 'string' && (path.startsWith('http://') || path.startsWith('https://'))) {
            return browser.url(path)
        }

        return browser.url(`regulaforensics.com/${path}`)
    }
}
