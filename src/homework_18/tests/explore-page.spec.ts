import { test } from '@playwright/test';
import { ExplorePage } from '../pages/explore-page';

test.describe('GitHub Explore Tests', () => {
    let explorePage: ExplorePage;

    test.beforeEach(async ({ page }) => {
        explorePage = new ExplorePage(page);
        await explorePage.goTo();
    });

    test('View trending developers', async () => {
        await explorePage.viewTrendingDevelopers();
    });

    test('View trending repositories', async () => {
        await explorePage.viewTrendingRepositories();
    });

    test('Explore topics', async () => {
        await explorePage.exploreTopics();
    });
});

