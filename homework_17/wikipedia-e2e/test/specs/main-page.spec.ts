import { expect } from 'chai';
import MainPage from '../../src/pages/main-page';

describe('Main Page', () => {
    it('should load Wikipedia main page and allow search', async () => {
        await MainPage.open();
        await MainPage.search('WebdriverIO');
        const url = await browser.getUrl();
        expect(url).to.include('search=WebdriverIO');
    });
});
