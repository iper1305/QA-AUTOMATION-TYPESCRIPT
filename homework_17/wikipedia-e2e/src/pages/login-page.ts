import { browser, $ } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

export class LoginPage {
    public get usernameInput(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#wpName1');
    }

    public get passwordInput(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#wpPassword1');
    }

    public get loginButton(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#wpLoginAttempt');
    }

    public async open(): Promise<void> {
        await browser.url('/w/index.php?title=Special:UserLogin');
    }

    public async login(username: string, password: string): Promise<void> {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }
}

export default new LoginPage();
