import { Page, Locator } from '@playwright/test';

export class ProfilePage {
    public readonly page: Page;
    private readonly repositoriesTab: Locator;
    private readonly projectsTab: Locator;
    private readonly starredRepositories: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.repositoriesTab = page.getByRole('link', { name: 'Repositories' });
        this.projectsTab = page.getByRole('link', { name: 'Projects' });
        this.starredRepositories = page.getByRole('link', { name: 'Starred' });
    }

    public async viewRepositories(): Promise<void> {
        await this.repositoriesTab.click();
    }

    public async viewProjects(): Promise<void> {
        await this.projectsTab.click();
    }

    public async viewStarredRepositories(): Promise<void> {
        await this.starredRepositories.click();
    }
}
