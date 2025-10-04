import { browser } from '@wdio/globals'

//logger import
import log4js from "log4js";
const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL || 'info';

//allureWrapper import
import AllureWrapper from "./../../utils/allureWrapper"

export default class Page {

    constructor(){

    }

    /**
    * Method for logs
    * @param {object} obj Additional properties may be required
    * @param obj.MESSAGE - message for log, typeof - String
    * @param obj.LOG_LEVEL - level of log, typeof - String
    */
    async logger(obj){
        if (obj.LOG_LEVEL === undefined) { obj.LOG_LEVEL = 'info' }
        switch (obj.LOG_LEVEL) {
            case "info":
                logger.info(obj.MESSAGE);
                break;
            case "debug":
                logger.debug(obj.MESSAGE);
                break;
            default:
                throw new Error('Page.logger(): logger error');
        }
    }

    async takeAllureScreenShot(name){
        await AllureWrapper.addAllureScreenShot(name)
    };

    async _goTo (url) {
        this.logger({MESSAGE: `Page._goTo(): try to open url: ${url}`, LOG_LEVEL: "info"})
        browser.url(url)
        await this.takeAllureScreenShot(`try to open url: ${url}`);
    };

    async open (path = '') {
        if (typeof path === 'string' && (path.startsWith('http://') || path.startsWith('https://'))) {
            return await this._goTo(path)
        }
       await this._goTo(`regulaforensics.com/${path}`)
    };
}