import { expect } from 'chai';
import { WebDriver } from 'selenium-webdriver';
import { getDriver, quitDriver } from '../utils/driver';
import {HomePage} from '../pages/home-page';

describe('HomePage Tests', function () {
    let driver: WebDriver;
    let homePage: HomePage;

    this.timeout(30000);

    before(async () => {
        driver = await getDriver();
        homePage = new HomePage(driver);
    });

    after(async () => {
        await quitDriver(driver);
    });

    it('should successfully open Amazon homepage', async () => {
        await homePage.open();
        const pageTitle = await driver.getTitle();
        expect(pageTitle).to.include('Amazon', 'The page title should contain “Amazon”');
    });
});
