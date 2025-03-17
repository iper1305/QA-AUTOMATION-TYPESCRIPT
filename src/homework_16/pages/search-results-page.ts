export class SearchResultsPage {
    private page: import('puppeteer').Page;

    public constructor(page: import('puppeteer').Page) {
        this.page = page;
    }

    public async getResultsCount(): Promise<number> {
        const count = await this.page.$$eval('.s-result-list [data-index]', elements => elements.length);
        console.log('Found results count:', count);
        return count;
    }

    public async getFirstResultTitle(): Promise<string> {
        const title = await this.page.$eval(
            '(//div[contains(@class, "s-result-item")]//h2//span)[1]',
            el => el.textContent?.trim() || ''
        );
        console.log('First result title:', title);
        return title;
    }

    public async clickFirstResult(): Promise<void> {
        try {
            await Promise.all([
                this.page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 10000 }),
                this.page.click('(//div[contains(@class, "s-result-item")]//a[contains(@class, "a-link-normal")])[1]')
            ]);
            await this.page.waitForSelector('#productTitle', { timeout: 10000 });
        } catch (error) {
            console.log('Navigation failed. Dumping page content for debugging...');
            const content = await this.page.content();
            console.log('Page content snippet:', content.substring(0, 4000));
            throw error;
        }
    }
}
