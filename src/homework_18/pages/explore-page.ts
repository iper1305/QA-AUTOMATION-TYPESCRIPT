import { Page, Locator } from '@playwright/test';

export class ExplorePage {
    public readonly page: Page;
    private readonly trendingDevelopers: Locator;
    private readonly trendingRepositories: Locator;
    private readonly topicsExplore: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.trendingDevelopers = page.getByRole('link', { name: 'Trending developers' });
        this.trendingRepositories = page.getByRole('link', { name: 'Trending repositories' });
        this.topicsExplore = page.getByRole('link', { name: 'Topics' });
    }

    public async viewTrendingDevelopers(): Promise<void> {
        await this.trendingDevelopers.click();
    }

    public async viewTrendingRepositories(): Promise<void> {
        await this.trendingRepositories.click();
    }

    public async exploreTopics(): Promise<void> {
        await this.topicsExplore.click();
    }
}

