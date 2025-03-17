export class ProductPage {
    private page: import('puppeteer').Page;

    public constructor(page: import('puppeteer').Page) {
        this.page = page;
    }

    public async getProductTitle(): Promise<string> {
        return await this.page.$eval('#productTitle', el => el.textContent?.trim() || '');
    }
}
