import { Page } from 'puppeteer';
import { BasePage } from './base-page';

export class HomePage extends BasePage {
    private readonly url = 'https://www.amazon.com';
    private readonly searchInput = '#twotabsearchtextbox';
    private readonly searchButton = '#nav-search-submit-button';

    public constructor(page: Page) {
        super(page);
    }

    public async open(): Promise<void> {
        await this.page.goto(this.url, { waitUntil: 'networkidle2' });
    }

    public async enterSearchQuery(query: string): Promise<void> {
        await this.page.type(this.searchInput, query);
    }

    public async clickSearchButton(): Promise<void> {
        await this.page.click(this.searchButton);
        await this.waitForNavigation();
    }
}
