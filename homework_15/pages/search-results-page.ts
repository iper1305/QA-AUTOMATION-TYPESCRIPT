import { WebDriver, By, until } from 'selenium-webdriver';

export class SearchResultsPage {
    private driver: WebDriver;
    private searchResultsCss = '.s-result-list [data-index]';
    private firstResultTitleXpath = '(//div[contains(@class, "s-result-item")]//h2//span)[1]';
    private firstResultLinkXpath = '(//div[contains(@class, "s-result-item")]//a[contains(@class, "a-link-normal")])[1]';

    public constructor(driver: WebDriver) {
        this.driver = driver;
    }

    public async getResultsCount(): Promise<number> {
        const results = await this.driver.findElements(By.css(this.searchResultsCss));
        console.log('Found results count:', results.length);
        return results.length;
    }

    public async getFirstResultTitle(): Promise<string> {
        const firstResult = await this.driver.findElement(By.xpath(this.firstResultTitleXpath));
        const title = await firstResult.getText();
        console.log('First result title:', title);
        return title;
    }

    public async clickFirstResult(): Promise<void> {
        try {
            const firstResultLink = await this.driver.findElement(By.xpath(this.firstResultLinkXpath));
            const href = await firstResultLink.getAttribute('href');
            console.log('First result link href:', href);
            await firstResultLink.click();
        } catch (error) {
            console.log('XPath locator failed. Dumping page source for debugging...');
            const pageSource = await this.driver.getPageSource();
            console.log('Page source snippet (search results area):', pageSource.substring(0, 4000));
            throw error;
        }
        await this.driver.wait(until.elementLocated(By.css('#productTitle')), 10000);
    }
}
