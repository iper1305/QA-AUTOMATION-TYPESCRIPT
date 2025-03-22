import { expect } from 'chai';
import {HomePage} from '../pages/home-page';
import {getBrowser, getPage, quitBrowser} from '../utils/browser';

describe('HomePage Tests', function () {
    let browser: import('puppeteer').Browser;
    let page: import('puppeteer').Page;
    let homePage: HomePage;

    this.timeout(30000);

    before(async () => {
        browser = await getBrowser();
        page = await getPage(browser);
        homePage = new HomePage(page);
    });

    after(async () => {
        await quitBrowser(browser);
    });

    it('should successfully open Amazon homepage', async () => {
        await homePage.open();
        const pageTitle = await page.title();
        expect(pageTitle).to.include('Amazon', 'The page title should contain “Amazon”');
    });
});
