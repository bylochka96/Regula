import allureReporter from '@wdio/allure-reporter';

class AllureWrapper {
  constructor() {
    this.allure = allureReporter;
  }

  /**
   * Method for make and add the screenshot to the Allure reporter
   * @param {string} name - provide the screenshot's name
   * @return {Promise<void>}
   */
  async addAllureScreenShot(name) {
    await browser.pause(100);
    return this.allure.addAttachment(`${name}.png`,
      Buffer.from( await browser.takeScreenshot(), 'base64'), 'image/png');
  }
}

export default new AllureWrapper();