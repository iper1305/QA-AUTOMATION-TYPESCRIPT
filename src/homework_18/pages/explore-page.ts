import {Page, Locator, expect} from '@playwright/test';

export class ExplorePage {
    private trendingDevelopers: Locator;
    private trendingRepositories: Locator;
    private topicsExplore: Locator;

    public constructor(private page: Page) {
        this.trendingDevelopers = page.getByRole('link', { name: 'Trending developers' });
        this.trendingRepositories = page.getByRole('link', { name: 'Trending repositories' });
        this.topicsExplore = page.getByRole('link', { name: 'Topics' });
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://github.com/explore');
        await this.page.waitForSelector('h1:has-text("Explore")');
    }

    public async viewTrendingDevelopers(): Promise<void> {
        await this.trendingDevelopers.click();
        await expect(this.page).toHaveURL(/trending\/developers/);
    }

    public async viewTrendingRepositories(): Promise<void> {
        await this.trendingRepositories.click();
        await expect(this.page).toHaveURL(/trending/);
    }

    public async exploreTopics(): Promise<void> {
        await this.topicsExplore.click();
        await expect(this.page).toHaveURL(/topics/);
    }
}

