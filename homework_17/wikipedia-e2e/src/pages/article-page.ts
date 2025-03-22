import type { ChainablePromiseElement } from 'webdriverio';

export class ArticlePage {
    public get pageTitle(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#firstHeading');
    }

    public async getTitleText(): Promise<string> {
        return this.pageTitle.getText();
    }
}

export default new ArticlePage();
