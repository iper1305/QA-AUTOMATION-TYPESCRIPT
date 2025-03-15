import { expect } from 'chai';
import { WebDriver } from 'selenium-webdriver';
import { getDriver, quitDriver } from '../utils/driver';
import {HomePage} from '../pages/home-page';
import {SearchResultsPage} from '../pages/search-results-page';
import {ProductPage} from '../pages/product-page';

describe('ProductPage Tests', function () {
    let driver: WebDriver;
    let homePage: HomePage;
    let searchResultsPage: SearchResultsPage;
    let productPage: ProductPage;

    this.timeout(30000);

    before(async () => {
        driver = await getDriver();
        homePage = new HomePage(driver);
        searchResultsPage = new SearchResultsPage(driver);
        productPage = new ProductPage(driver);
    });

    after(async () => {
        await quitDriver(driver);
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
