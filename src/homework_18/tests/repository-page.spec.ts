import { test, expect } from '@playwright/test';
import { RepositoryPage } from '../pages/repository-page';

test.describe('GitHub Repository Tests', () => {
    let repositoryPage: RepositoryPage;

    test.beforeEach(async ({ page }) => {
        repositoryPage = new RepositoryPage(page);
        await repositoryPage.goTo('microsoft', 'playwright');
        await expect(page.locator('.repository-content')).toBeVisible();
    });

    test('Verify README visibility', async () => {
        const readmeVisible = await repositoryPage.isReadmeVisible();
        expect(readmeVisible).toBeTruthy();
    });

    test('Navigate to Issues tab', async ({ page }) => {
        await repositoryPage.navigateToIssues();
        await expect(page).toHaveURL(/issues/);
    });
});
