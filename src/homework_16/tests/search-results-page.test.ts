import { expect } from 'chai';
import { Browser, Page } from 'puppeteer';
import { HomePage } from '../pages/home-page';
import { SearchResultsPage } from '../pages/search-results-page';
import { getBrowser, getPage, quitBrowser } from '../utils/browser';
import { captureScreenshot, capturePageContent } from '../utils/test-utils';

describe('SearchResultsPage Tests', function () {
    let browser: Browser;
    let page: Page;
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

    afterEach(async function() {
        if (this.currentTest?.state === 'failed') {
            await captureScreenshot(page, this.currentTest.title);
            await capturePageContent(page, this.currentTest.title);
        }
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

        const currentUrl = await searchResultsPage.getCurrentUrl();
        expect(currentUrl).to.include('/dp/', 'URL should point to a product page');
    });
});
