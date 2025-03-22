import { $ } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

export class SearchResultsPage {
    public get firstResult(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('.mw-search-result-heading a');
    }

    public async clickFirstResult(): Promise<void> {
        await this.firstResult.click();
    }
}

export default new SearchResultsPage();
