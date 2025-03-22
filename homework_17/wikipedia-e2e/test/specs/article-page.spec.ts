import MainPage from '../../src/pages/main-page';
import SearchResultsPage from '../../src/pages/search-results-page';
import ArticlePage from '../../src/pages/article-page';


describe('Article Page', () => {
    it('should display the correct article title', async () => {
        await MainPage.open();
        await MainPage.search('JavaScript');
        await SearchResultsPage.clickFirstResult();
        const title = await ArticlePage.getTitleText();
        await expect(title).toEqual('JavaScript');
    });
});
