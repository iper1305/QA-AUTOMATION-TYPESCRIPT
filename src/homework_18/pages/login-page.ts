import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private usernameInput: Locator;
    private passwordInput: Locator;
    private signInButton: Locator;

    public constructor(private page: Page) {
        this.usernameInput = page.getByLabel('Username or email address');
        this.passwordInput = page.getByLabel('Password');
        this.signInButton = page.getByRole('button', { name: 'Sign in' });
    }

    public async goTo(): Promise<void> {
        await this.page.goto('https://github.com/login');
        await this.page.waitForSelector('form[action="/session"]');
    }

    public async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }
}
