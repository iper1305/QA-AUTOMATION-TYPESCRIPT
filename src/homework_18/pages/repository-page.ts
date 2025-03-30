import {Page, Locator, expect} from '@playwright/test';

export class RepositoryPage {
    private readonly readmeSection: Locator;
    private readonly issuesTab: Locator;
    private readonly pullRequestsTab: Locator;

    public constructor(private page: Page) {
        this.readmeSection = page.locator('#readme');
        this.issuesTab = page.getByRole('link', { name: 'Issues' });
        this.pullRequestsTab = page.getByRole('link', { name: 'Pull requests' });
    }

    public async goTo(owner: string, repo: string): Promise<void> {
        await this.page.goto(`https://github.com/${owner}/${repo}`);
        await this.page.waitForSelector('.repository-content');
    }

    public async isReadmeVisible(): Promise<boolean> {
        return await this.readmeSection.isVisible();
    }

    public async navigateToIssues(): Promise<void> {
        await this.issuesTab.click();
        await expect(this.page).toHaveURL(/issues/);
    }

    public async navigateToPullRequests(): Promise<void> {
        await this.pullRequestsTab.click();
        await expect(this.page).toHaveURL(/pulls/);
    }
}
