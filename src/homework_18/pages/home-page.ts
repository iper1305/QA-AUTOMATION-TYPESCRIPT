import { Page, Locator } from '@playwright/test';

export class HomePage {
    public readonly page: Page;
    private readonly signUpButton: Locator;
    private readonly searchInput: Locator;
    private readonly exploreTrending: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.signUpButton = page.getByRole('link', { name: 'Sign up' });
        this.searchInput = page.getByPlaceholder('Search GitHub');
        this.exploreTrending = page.getByRole('link', { name: 'Trending' });
    }

    public async navigateTo(): Promise<void> {
        await this.page.goto('https://github.com');
    }

    public async clickSignUp(): Promise<void> {
        await this.signUpButton.click();
    }

    public async searchRepository(query: string): Promise<void> {
        await this.searchInput.fill(query);
        await this.page.keyboard.press('Enter');
    }

    public async exploreTrendingRepositories(): Promise<void> {
        await this.exploreTrending.click();
    }
}
