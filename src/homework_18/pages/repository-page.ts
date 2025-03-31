import {Page, Locator, expect} from '@playwright/test';

export class RepositoryPage {
    private readonly _readmeSection: Locator;
    private readonly _issuesTab: Locator;
    private readonly _pullRequestsTab: Locator;
    private readonly _pageLoadedLocator: Locator;

    public constructor(private readonly _page: Page) {
        this._readmeSection = _page.locator('#readme');
        this._issuesTab = _page.getByRole('link', { name: 'Issues' });
        this._pullRequestsTab = _page.getByRole('link', { name: 'Pull requests' });
        this._pageLoadedLocator = _page.locator('.repository-content');
    }

    public get readmeSection(): Locator {
        return this._readmeSection;
    }

    public get issuesTab(): Locator {
        return this._issuesTab;
    }

    public get pullRequestsTab(): Locator {
        return this._pullRequestsTab;
    }

    public get pageLoadedLocator(): Locator {
        return this._pageLoadedLocator;
    }

    public async goTo(owner: string, repo: string): Promise<void> {
        await this._page.goto(`https://github.com/${owner}/${repo}`);
        await this.pageLoadedLocator.waitFor({ state: 'visible' });
    }

    public async isReadmeVisible(): Promise<boolean> {
        return await this.readmeSection.isVisible();
    }

    public async navigateToIssues(): Promise<void> {
        await this.issuesTab.click();
        await expect(this._page).toHaveURL(/issues/);
    }

    public async navigateToPullRequests(): Promise<void> {
        await this.pullRequestsTab.click();
        await expect(this._page).toHaveURL(/pulls/);
    }

    public async isPageLoaded(): Promise<boolean> {
        return await this.pageLoadedLocator.isVisible();
    }
}
