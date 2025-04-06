import { test, expect } from '@playwright/test';
import {DocsPage} from '../pages/docs-page';

test.describe('Playwright Docs Page - Medium Style POM', () => {
    let docsPage: DocsPage;

    test.beforeEach(async ({ page }) => {
        docsPage = new DocsPage(page);
        await docsPage.goto();
    });

    test('should display header logo', async () => {
        await docsPage.header.expectLogoToBeVisible();
    });

    test('should display the correct article heading', async () => {
        const heading = await docsPage.article.getMainHeadingText();
        expect(heading).toBe('Getting started');
    });

    test('should navigate when clicking a sidebar link', async ({ page }) => {
        const linkText = 'Writing tests';
        await docsPage.sidebar.clickLinkByText(linkText);

        await expect(page).toHaveURL(/.*writing-tests/);
        await docsPage.article.expectedTextIsExist(linkText);
    });

    test('should show the installation command in the article', async () => {
        await docsPage.article.expectInstallationCommandIsVisible();
        const commandText = await docsPage.article.getInstallationCommandText();
        expect(commandText).toContain('npm init playwright@latest');
    });

    test('should have the correct page title', async () => {
        const title = await docsPage.getPageTitle();
        expect(title).toContain('Getting started | Playwright');
    });
});
