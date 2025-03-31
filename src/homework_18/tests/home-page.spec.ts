import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';

test.describe('GitHub Home Page Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.goTo();
        await expect(page.locator('.application-main')).toBeVisible();
    });

    test('Verify home page title', async ({ page }) => {
        await expect(page).toHaveTitle(/GitHub/);
    });

    test('Search functionality works', async ({ page }) => {
        await homePage.searchRepository('playwright');
        await expect(page).toHaveURL(/search/);
    });

    test('Navigate to trending repositories', async ({ page }) => {
        await homePage.exploreTrendingRepositories();
        await expect(page).toHaveURL(/trending/);
    });
});
