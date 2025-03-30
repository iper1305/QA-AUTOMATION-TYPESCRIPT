import { test } from '@playwright/test';
import { ProfilePage } from '../pages/profile-page';

test.describe('GitHub Profile Tests', () => {
    let profilePage: ProfilePage;

    test.beforeEach(async ({ page }) => {
        profilePage = new ProfilePage(page);
        await profilePage.goTo('octocat');
    });

    test('View user repositories', async () => {
        await profilePage.viewRepositories();
    });

    test('View starred repositories', async () => {
        await profilePage.viewStarredRepositories();
    });
});
