import { expect } from 'chai';
import { WebDriver } from 'selenium-webdriver';
import { getDriver, quitDriver } from '../utils/driver';
import {SearchResultsPage} from '../pages/search-results-page';
import {HomePage} from '../pages/home-page';

describe('SearchResultsPage Tests', function () {
    let driver: WebDriver;
    let homePage: HomePage;
    let searchResultsPage: SearchResultsPage;

    this.timeout(30000);

    before(async () => {
        driver = await getDriver();
        homePage = new HomePage(driver);
        searchResultsPage = new SearchResultsPage(driver);
    });

    after(async () => {
        await quitDriver(driver);
    });

    it('should display results for "TypeScript books"', async () => {
        await homePage.open();
        await homePage.enterSearchQuery('TypeScript books');
        await homePage.clickSearchButton();

        const resultsCount = await searchResultsPage.getResultsCount();
        const firstResultTitle = await searchResultsPage.getFirstResultTitle();

        expect(resultsCount).to.be.greaterThan(0, 'Expected search results to be found');
        expect(firstResultTitle.toLowerCase()).to.include('typescript', 'First result should contain "TypeScript"');
    });

    it('should navigate to the first product page', async () => {
        await homePage.open();
        await homePage.enterSearchQuery('TypeScript books');
        await homePage.clickSearchButton();
        await searchResultsPage.clickFirstResult();

        const currentUrl = await driver.getCurrentUrl();
        console.log('Current URL after clicking:', currentUrl); // Debug
        expect(currentUrl).to.include('/dp/', 'URL should point to a product page');
    });
});
