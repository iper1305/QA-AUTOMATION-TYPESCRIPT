import { test, expect } from '@playwright/test';
import { ProfilePage } from '../pages/profile-page';

test.describe('GitHub Profile Tests', () => {
    let profilePage: ProfilePage;

    test.beforeEach(async ({ page }) => {
        profilePage = new ProfilePage(page);
        await profilePage.goTo('octocat');
        await expect(page.locator('.user-profile-bio')).toBeVisible();
    });

    test('View user repositories', async ({ page }) => {
        await profilePage.viewRepositories();
        await expect(page).toHaveURL(/tab=repositories/);
    });

    test('View starred repositories', async ({ page }) => {
        await profilePage.viewStarredRepositories();
        await expect(page).toHaveURL(/tab=stars/);
    });
});
