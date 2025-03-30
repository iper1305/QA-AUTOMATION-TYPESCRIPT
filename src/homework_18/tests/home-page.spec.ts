import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';

test.describe('GitHub Home Page Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goTo();
    });

    test('Verify home page title', async ({ page }) => {
        await expect(page).toHaveTitle(/GitHub/);
    });

    test('Search functionality works', async () => {
        await homePage.searchRepository('playwright');
    });

    test('Navigate to trending repositories', async () => {
        await homePage.exploreTrendingRepositories();
    });
});

