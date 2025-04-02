import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    private readonly _signUpButton: Locator;
    private readonly _searchInput: Locator;
    private readonly _exploreTrending: Locator;
    private readonly _pageLoadedLocator: Locator;

    public constructor(private readonly _page: Page) {
        this._signUpButton = _page.getByRole('link', { name: 'Sign up' });
        this._searchInput = _page.getByPlaceholder('Search GitHub');
        this._exploreTrending = _page.getByRole('link', { name: 'Trending' });
        this._pageLoadedLocator = _page.locator('.application-main');
    }

    public get signUpButton(): Locator {
        return this._signUpButton;
    }

    public get searchInput(): Locator {
        return this._searchInput;
    }

    public get exploreTrending(): Locator {
        return this._exploreTrending;
    }

    public get pageLoadedLocator(): Locator {
        return this._pageLoadedLocator;
    }

    public async goTo(): Promise<void> {
        await this._page.goto('https://github.com');
        await this.pageLoadedLocator.waitFor({ state: 'visible' });
    }

    public async clickSignUp(): Promise<void> {
        await this.signUpButton.click();
        await expect(this._page).toHaveURL(/signup/);
    }

    public async searchRepository(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this._page.keyboard.press('Enter');
        await expect(this._page).toHaveURL(/search/);
    }

    public async exploreTrendingRepositories(): Promise<void> {
        await this.exploreTrending.click();
        await expect(this._page).toHaveURL(/trending/);
    }

    public getCurrentUrl(): string {
        return this._page.url();
    }

    public async isPageLoaded(): Promise<boolean> {
        return await this.pageLoadedLocator.isVisible();
    }
}
