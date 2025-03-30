import {Page, Locator, expect} from '@playwright/test';

export class HomePage {
    private signUpButton: Locator;
    private searchInput: Locator;
    private exploreTrending: Locator;

    public constructor(private page: Page) {
        this.signUpButton = page.getByRole('link', { name: 'Sign up' });
        this.searchInput = page.getByPlaceholder('Search GitHub');
        this.exploreTrending = page.getByRole('link', { name: 'Trending' });
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://github.com');
        await this.page.waitForSelector('.application-main');
    }

    public async clickSignUp(): Promise<void> {
        await this.signUpButton.click();
        await expect(this.page).toHaveURL(/signup/);
    }

    public async searchRepository(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.page.keyboard.press('Enter');
        await expect(this.page).toHaveURL(/search/);
    }

    public async exploreTrendingRepositories(): Promise<void> {
        await this.exploreTrending.click();
        await expect(this.page).toHaveURL(/trending/);
    }
}
