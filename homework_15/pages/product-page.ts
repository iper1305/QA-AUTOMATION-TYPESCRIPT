import {By, WebDriver} from 'selenium-webdriver';

export class ProductPage {
    private driver: WebDriver;
    private productTitleCss = '#productTitle';

    public constructor(driver: WebDriver) {
        this.driver = driver;
    }

    public async getProductTitle(): Promise<string> {
        const titleElement = await this.driver.findElement(By.css(this.productTitleCss));
        return await titleElement.getText();
    }
}

