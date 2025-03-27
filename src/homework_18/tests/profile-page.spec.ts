import { test, expect } from '@playwright/test';
import { ProfilePage } from '../pages/profile-page';

test.describe('GitHub Profile Tests', () => {
    let profilePage: ProfilePage;

    test.beforeEach(async ({ page }) => {
        profilePage = new ProfilePage(page);
        await profilePage.page.goto('https://github.com/octocat');
    });

    test('View user repositories', async () => {
        await profilePage.viewRepositories();
        await expect(profilePage.page).toHaveURL(/tab=repositories/);
    });

    test('View starred repositories', async () => {
        await profilePage.viewStarredRepositories();
        await expect(profilePage.page).toHaveURL(/tab=stars/);
    });
});
