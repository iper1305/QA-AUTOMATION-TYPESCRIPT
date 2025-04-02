import {expect, test} from '@playwright/test';
import { ExplorePage } from '../pages/explore-page';

test.describe('GitHub Explore Tests', () => {
    let explorePage: ExplorePage;

    test.beforeEach(async ({ page }) => {
        explorePage = new ExplorePage(page);
        await explorePage.goTo();
        await expect(page.locator('h1:has-text("Explore")')).toBeVisible();
    });

    test('View trending developers', async () => {
        await explorePage.viewTrendingDevelopers();
        await expect(explorePage.getTrendingDevelopersUrl()).toContain('trending/developers');
    });

    test('View trending repositories', async () => {
        await explorePage.viewTrendingRepositories();
        await expect(explorePage.getTrendingRepositoriesUrl()).toContain('trending');
    });

    test('Explore topics', async () => {
        await explorePage.exploreTopics();
        await expect(explorePage.getTopicsUrl()).toContain('topics');
    });
});

