import { Page, Locator } from '@playwright/test';

export class RepositoryPage {
    public readonly page: Page;
    private readonly readmeSection: Locator;
    private readonly issuesTab: Locator;
    private readonly pullRequestsTab: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.readmeSection = page.locator('#readme');
        this.issuesTab = page.getByRole('link', { name: 'Issues' });
        this.pullRequestsTab = page.getByRole('link', { name: 'Pull requests' });
    }

    public async viewReadme(): Promise<boolean> {
        return await this.readmeSection.isVisible();
    }

    public async navigateToIssues(): Promise<void> {
        await this.issuesTab.click();
    }

    public async navigateToPullRequests(): Promise<void> {
        await this.pullRequestsTab.click();
    }
}
