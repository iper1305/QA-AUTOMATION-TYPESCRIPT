import {Page, Locator, expect} from '@playwright/test';

export class ExplorePage {
    private readonly _trendingDevelopers: Locator;
    private readonly _trendingRepositories: Locator;
    private readonly _topicsExplore: Locator;
    private readonly _pageLoadedLocator: Locator;

    public constructor(private readonly _page: Page) {
        this._trendingDevelopers = _page.getByRole('link', { name: 'Trending developers' });
        this._trendingRepositories = _page.getByRole('link', { name: 'Trending repositories' });
        this._topicsExplore = _page.getByRole('link', { name: 'Topics' });
        this._pageLoadedLocator = _page.locator('h1:has-text("Explore")');
    }

    public get trendingDevelopers(): Locator {
        return this._trendingDevelopers;
    }

    public get trendingRepositories(): Locator {
        return this._trendingRepositories;
    }

    public get topicsExplore(): Locator {
        return this._topicsExplore;
    }

    public get pageLoadedLocator(): Locator {
        return this._pageLoadedLocator;
    }

    public async goTo(): Promise<void> {
        await this._page.goto('https://github.com/explore');
        await this.pageLoadedLocator.waitFor({ state: 'visible' });
    }

    public async viewTrendingDevelopers(): Promise<void> {
        await this.trendingDevelopers.click();
        await expect(this._page).toHaveURL(/trending\/developers/);
    }

    public async viewTrendingRepositories(): Promise<void> {
        await this.trendingRepositories.click();
        await expect(this._page).toHaveURL(/trending/);
    }

    public async exploreTopics(): Promise<void> {
        await this.topicsExplore.click();
        await expect(this._page).toHaveURL(/topics/);
    }

    public getTrendingDevelopersUrl(): string {
        return this._page.url();
    }

    public getTrendingRepositoriesUrl(): string {
        return this._page.url();
    }

    public getTopicsUrl(): string {
        return this._page.url();
    }

    public async isPageLoaded(): Promise<boolean> {
        return await this.pageLoadedLocator.isVisible();
    }
}
