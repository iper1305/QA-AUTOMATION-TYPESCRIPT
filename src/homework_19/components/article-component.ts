import { type Locator, expect } from '@playwright/test';

export class ArticleComponent {
    private readonly rootLocator: Locator;

    private get pageTitleLocator(): Locator {
        return this.rootLocator.locator('header h1');
    }

    private get installationCommandTextLocator(): Locator {
        return this.rootLocator.locator('code:has-text("npm init playwright@latest")');
    }

    private get newArticleHeadingLocator(): Locator {
        return this.rootLocator.locator('article header h1');
    }

    public constructor(locator: Locator) {
        this.rootLocator = locator;
    }

    public async getMainHeadingText(): Promise<string> {
        const text = await this.pageTitleLocator.textContent();
        if (text === null) {
            throw new Error('Unable to retrieve article title text');
        }
        return text;
    }

    public async expectInstallationCommandIsVisible():Promise<void> {
        await expect(this.installationCommandTextLocator).toBeVisible();
    }

    public async expectedTextIsExist(text: string):Promise<void> {
        await expect(this.newArticleHeadingLocator).toHaveText(text);
    }

    public async getInstallationCommandText(): Promise<string> {
        const text = await this.installationCommandTextLocator.textContent();
        if (text === null) {
            throw new Error('Could not get the text of the installation command');
        }
        return text;
    }
}
