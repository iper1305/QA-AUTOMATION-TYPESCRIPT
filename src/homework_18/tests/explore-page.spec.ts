import { test, expect } from '@playwright/test';
import { ExplorePage } from '../pages/explore-page';

test.describe('GitHub Explore Tests', () => {
    let explorePage: ExplorePage;

    test.beforeEach(async ({ page }) => {
        explorePage = new ExplorePage(page);
        await explorePage.page.goto('https://github.com/explore');
    });

    test('View trending developers', async () => {
        await explorePage.viewTrendingDevelopers();
        await expect(explorePage.page).toHaveURL(/trending\/developers/);
    });

    test('View trending repositories', async () => {
        await explorePage.viewTrendingRepositories();
        await expect(explorePage.page).toHaveURL(/trending/);
    });
});
