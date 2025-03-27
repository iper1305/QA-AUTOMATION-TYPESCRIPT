import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/home-page';

test.describe('GitHub Home Page Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        homePage = new HomePage(page);
        await homePage.navigateTo();
    });

    test('Verify home page title', async () => {
        await expect(homePage.page).toHaveTitle(/GitHub/);
    });

    test('Search functionality works', async () => {
        await homePage.searchRepository('playwright');
        await expect(homePage.page).toHaveURL(/search/);
    });
});
