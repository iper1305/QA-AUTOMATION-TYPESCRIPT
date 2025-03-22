import { Builder, WebDriver } from 'selenium-webdriver';

export async function getDriver(): Promise<WebDriver> {
    return await new Builder().forBrowser('chrome').build();
}

export async function quitDriver(driver: WebDriver): Promise<void> {
    await driver.quit();
}
