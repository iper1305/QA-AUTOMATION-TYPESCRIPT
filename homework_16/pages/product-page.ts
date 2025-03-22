import { Page } from 'puppeteer';
import { BasePage } from './base-page';

export class ProductPage extends BasePage {
    private readonly productTitleSelector = '#productTitle';

    public constructor(page: Page) {
        super(page);
    }

    public async getProductTitle(): Promise<string> {
        return await this.page.$eval(this.productTitleSelector, el => el.textContent?.trim() || '');
    }
}
