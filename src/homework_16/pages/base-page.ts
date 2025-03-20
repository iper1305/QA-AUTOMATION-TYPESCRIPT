import { Page, WaitForOptions } from 'puppeteer';

export abstract class BasePage {
    protected page: Page;

    public constructor(page: Page) {
        this.page = page;
    }

    public async getTitle(): Promise<string> {
        return await this.page.title();
    }

    public async getCurrentUrl(): Promise<string> {
        return await this.page.url();
    }

    public async waitForNavigation(options: WaitForOptions = { waitUntil: 'networkidle2', timeout: 10000 }): Promise<void> {
        await this.page.waitForNavigation(options);
    }

    public async waitForSelector(selector: string, options = { timeout: 10000 }): Promise<void> {
        await this.page.waitForSelector(selector, options);
    }
}
