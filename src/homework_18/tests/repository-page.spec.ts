import { test, expect } from '@playwright/test';
import { RepositoryPage } from '../pages/repository-page';

test.describe('GitHub Repository Tests', () => {
    let repositoryPage: RepositoryPage;

    test.beforeEach(async ({ page }) => {
        repositoryPage = new RepositoryPage(page);
        await repositoryPage.page.goto('https://github.com/microsoft/playwright');
    });

    test('Verify README visibility', async () => {
        const readmeVisible = await repositoryPage.viewReadme();
        expect(readmeVisible).toBeTruthy();
    });

    test('Navigate to Issues tab', async () => {
        await repositoryPage.navigateToIssues();
        await expect(repositoryPage.page).toHaveURL(/issues/);
    });
});
