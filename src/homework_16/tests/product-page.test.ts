import { expect } from 'chai';
import {HomePage} from '../pages/home-page';
import {getBrowser, getPage, quitBrowser} from '../utils/browser';
import {SearchResultsPage} from '../pages/search-results-page';
import {ProductPage} from '../pages/product-page';

describe('ProductPage Tests', function () {
    let browser: import('puppeteer').Browser;
    let page: import('puppeteer').Page;
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

    it('should display correct product title', async () => {
        await homePage.open();
        await homePage.enterSearchQuery('TypeScript books');
        await homePage.clickSearchButton();
        await searchResultsPage.clickFirstResult();

        const productTitle = await productPage.getProductTitle();
        expect(productTitle.toLowerCase()).to.include('typescript', 'Product name consist "TypeScript"');
    });
});
