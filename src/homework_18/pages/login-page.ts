import { Page, Locator } from '@playwright/test';

export class LoginPage {
    public readonly page: Page;
    private readonly usernameInput: Locator;
    private readonly passwordInput: Locator;
    private readonly signInButton: Locator;

    public constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.getByLabel('Username or email address');
        this.passwordInput = page.getByLabel('Password');
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
    }

    public async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }
}
