import { expect } from 'chai';
import { Browser, Page } from 'puppeteer';
import { HomePage } from '../pages/home-page';
import { SearchResultsPage } from '../pages/search-results-page';
import { ProductPage } from '../pages/product-page';
import { getBrowser, getPage, quitBrowser } from '../utils/browser';
import { captureScreenshot, capturePageContent } from '../utils/test-utils';

describe('ProductPage Tests', function () {
    let browser: Browser;
    let page: Page;
    let homePage: HomePage;
    let searchResultsPage: SearchResultsPage;
    let productPage: ProductPage;

    this.timeout(30000);

    before(async () => {
        browser = await getBrowser();
        page = await getPage(browser);
        homePage = new HomePage(page);
        searchResultsPage = new SearchResultsPage(page);
        productPage = new ProductPage(page);
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

    it('should display correct product title', async () => {
        await homePage.open();
        await homePage.enterSearchQuery('TypeScript books');
        await homePage.clickSearchButton();
        await searchResultsPage.clickFirstResult();

        const productTitle = await productPage.getProductTitle();
        expect(productTitle.toLowerCase()).to.include('typescript', 'Product name should contain "TypeScript"');
    });
});
