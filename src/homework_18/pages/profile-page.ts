import {Page, Locator, expect} from '@playwright/test';

export class ProfilePage {
    private readonly repositoriesTab: Locator;
    private readonly projectsTab: Locator;
    private readonly starredRepositories: Locator;

    public constructor(private page: Page) {
        this.repositoriesTab = page.getByRole('link', { name: 'Repositories' });
        this.projectsTab = page.getByRole('link', { name: 'Projects' });
        this.starredRepositories = page.getByRole('link', { name: 'Starred' });
    }

    public async goTo(username: string): Promise<void> {
        await this.page.goto(`https://github.com/${username}`);
        await this.page.waitForSelector('.user-profile-bio');
    }

    public async viewRepositories(): Promise<void> {
        await this.repositoriesTab.click();
        await expect(this.page).toHaveURL(/tab=repositories/);
    }

    public async viewProjects(): Promise<void> {
        await this.projectsTab.click();
        await expect(this.page).toHaveURL(/tab=projects/);
    }

    public async viewStarredRepositories(): Promise<void> {
        await this.starredRepositories.click();
        await expect(this.page).toHaveURL(/tab=stars/);
    }
}
