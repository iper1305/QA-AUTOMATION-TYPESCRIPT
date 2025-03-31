import {Page, Locator, expect} from '@playwright/test';

export class ProfilePage {
    private readonly _repositoriesTab: Locator;
    private readonly _projectsTab: Locator;
    private readonly _starredRepositories: Locator;
    private readonly _pageLoadedLocator: Locator;

    public constructor(private readonly _page: Page) {
        this._repositoriesTab = _page.getByRole('link', { name: 'Repositories' });
        this._projectsTab = _page.getByRole('link', { name: 'Projects' });
        this._starredRepositories = _page.getByRole('link', { name: 'Starred' });
        this._pageLoadedLocator = _page.locator('.user-profile-bio');
    }

    public get repositoriesTab(): Locator {
        return this._repositoriesTab;
    }

    public get projectsTab(): Locator {
        return this._projectsTab;
    }

    public get starredRepositories(): Locator {
        return this._starredRepositories;
    }

    public get pageLoadedLocator(): Locator {
        return this._pageLoadedLocator;
    }

    public async goTo(username: string): Promise<void> {
        await this._page.goto(`https://github.com/${username}`);
        await this.pageLoadedLocator.waitFor({ state: 'visible' });
    }

    public async viewRepositories(): Promise<void> {
        await this.repositoriesTab.click();
        await expect(this._page).toHaveURL(/tab=repositories/);
    }

    public async viewProjects(): Promise<void> {
        await this.projectsTab.click();
        await expect(this._page).toHaveURL(/tab=projects/);
    }

    public async viewStarredRepositories(): Promise<void> {
        await this.starredRepositories.click();
        await expect(this._page).toHaveURL(/tab=stars/);
    }

    public async isPageLoaded(): Promise<boolean> {
        return await this.pageLoadedLocator.isVisible();
    }
}
