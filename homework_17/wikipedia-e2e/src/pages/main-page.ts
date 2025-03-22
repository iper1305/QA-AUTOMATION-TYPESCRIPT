import { browser, $ } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

export class MainPage {
    public get searchInput(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#searchInput');
    }

    public get searchButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('.cdx-search-input__end-button');
    }

    public get loginLink(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#pt-login a');
    }

    public async open(): Promise<void> {
        await browser.url('/');
    }

    public async search(query: string): Promise<void> {
        await this.searchInput.setValue(query);
        await this.searchButton.click();
    }
}

export default new MainPage();
