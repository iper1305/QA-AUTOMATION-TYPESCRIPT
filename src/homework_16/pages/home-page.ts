export class HomePage {
    private page: import('puppeteer').Page;

    public constructor(page: import('puppeteer').Page) {
        this.page = page;
    }

    public async open(): Promise<void> {
        await this.page.goto('https://www.amazon.com', { waitUntil: 'networkidle2' });
    }

    public async enterSearchQuery(query: string): Promise<void> {
        await this.page.type('#twotabsearchtextbox', query);
    }

    public async clickSearchButton(): Promise<void> {
        await Promise.all([
            this.page.click('input[value="Go"]'),
            this.page.waitForSelector('.s-search-results', { timeout: 10000 })
        ]);
    }
}
