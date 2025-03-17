import { expect } from 'chai';
import {HomePage} from '../pages/home-page';
import {getBrowser, getPage, quitBrowser} from '../utils/browser';
import {SearchResultsPage} from '../pages/search-results-page';


describe('SearchResultsPage Tests', function () {
    let browser: import('puppeteer').Browser;
    let page: import('puppeteer').Page;
    let homePage: HomePage;
    let searchResultsPage: SearchResultsPage;

    this.timeout(30000);

    before(async () => {
        browser = await getBrowser();
        page = await getPage(browser);
        homePage = new HomePage(page);
        searchResultsPage = new SearchResultsPage(page);
    });

    after(async () => {
        await quitBrowser(browser);
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

        const currentUrl = await page.url();
        console.log('Current URL after clicking:', currentUrl);
        expect(currentUrl).to.include('/dp/', 'URL should point to a product page');
    });
});
