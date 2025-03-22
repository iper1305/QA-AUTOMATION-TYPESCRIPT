import { expect } from 'chai';
import MainPage from '../../src/pages/main-page';
import SearchResultsPage from '../../src/pages/search-results-page';

describe('Search Results Page', () => {
    it('should display search results and allow clicking the first one', async () => {
        await MainPage.open();
        await MainPage.search('TypeScript');
        await SearchResultsPage.clickFirstResult();
        const url = await browser.getUrl();
        expect(url).to.include('TypeScript');
    });
});
