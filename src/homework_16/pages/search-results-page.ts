import { Page } from 'puppeteer';
import { BasePage } from './base-page';

export class SearchResultsPage extends BasePage {
    private readonly resultsSelector = '.s-result-list [data-index]';
    private readonly firstResultTitleSelector = '.s-result-item .a-link-normal .a-text-normal';
    private readonly firstResultLinkSelector = '.s-result-item .a-link-normal';

    public constructor(page: Page) {
        super(page);
    }

    public async getResultsCount(): Promise<number> {
        const count = await this.page.$$eval(this.resultsSelector, elements => elements.length);
        console.log('Found results count:', count);
        return count;
    }

    public async getFirstResultTitle(): Promise<string> {
        const title = await this.page.$eval(
            this.firstResultTitleSelector,
            el => el.textContent?.trim() || ''
        );
        console.log('First result title:', title);
        return title;
    }

    public async clickFirstResult(): Promise<void> {
        await Promise.all([
            this.page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 10000 }),
            this.page.click(this.firstResultLinkSelector)
        ]);

        await this.waitForSelector('#productTitle');
    }
}
