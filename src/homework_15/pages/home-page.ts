import { WebDriver, By, until } from 'selenium-webdriver';

export class HomePage {
    private driver: WebDriver;
    private searchInputCss = '#twotabsearchtextbox';
    private searchButtonXpath = '//input[@value="Go"]';

    public constructor(driver: WebDriver) {
        this.driver = driver;
    }

    public async open(): Promise<void> {
        await this.driver.get('https://www.amazon.com');
    }

    public async enterSearchQuery(query: string): Promise<void> {
        const searchInput = await this.driver.findElement(By.css(this.searchInputCss));
        await searchInput.clear();
        await searchInput.sendKeys(query);
    }

    public async clickSearchButton(): Promise<void> {
        const searchButton = await this.driver.findElement(By.xpath(this.searchButtonXpath));
        await searchButton.click();
        await this.driver.wait(until.elementLocated(By.css('.s-search-results')), 10000);
    }
}
