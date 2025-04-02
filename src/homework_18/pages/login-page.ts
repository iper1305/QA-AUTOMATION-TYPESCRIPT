import { Page, Locator } from '@playwright/test';

export class LoginPage {
    private readonly _usernameInput: Locator;
    private readonly _passwordInput: Locator;
    private readonly _signInButton: Locator;
    private readonly _pageLoadedLocator: Locator;

    public constructor(private readonly _page: Page) {
        this._usernameInput = _page.getByLabel('Username or email address');
        this._passwordInput = _page.getByLabel('Password');
        this._signInButton = _page.getByRole('button', { name: 'Sign in' });
        this._pageLoadedLocator = _page.locator('form[action="/session"]');
    }

    public get usernameInput(): Locator {
        return this._usernameInput;
    }

    public get passwordInput(): Locator {
        return this._passwordInput;
    }

    public get signInButton(): Locator {
        return this._signInButton;
    }

    public get pageLoadedLocator(): Locator {
        return this._pageLoadedLocator;
    }

    public async goTo(): Promise<void> {
        await this._page.goto('https://github.com/login');
        await this.pageLoadedLocator.waitFor({ state: 'visible' });
    }

    public async login(username: string, password: string): Promise<void> {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

    public async isPageLoaded(): Promise<boolean> {
        return await this.pageLoadedLocator.isVisible();
    }
}
