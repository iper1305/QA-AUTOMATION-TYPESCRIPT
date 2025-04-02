import { type Locator, expect } from '@playwright/test';

export class ArticleComponent {
    private readonly rootLocator: Locator;

    private get pageTitleLocator(): Locator {
        return this.rootLocator.locator('header h1');
    }

    private get installationCommandTextLocator(): Locator {
        return this.rootLocator.locator('code:has-text("npm init playwright@latest")');
    }

    public constructor(locator: Locator) {
        this.rootLocator = locator;
    }

    public async getMainHeadingText(): Promise<string> {
        const text = await this.pageTitleLocator.textContent();
        if (text === null) {
            throw new Error('Не вдалося отримати текст заголовка статті');
        }
        return text;
    }

    public async isInstallationCommandVisible():Promise<void> {
        await expect(this.installationCommandTextLocator).toBeVisible();
    }

    public async getInstallationCommandText(): Promise<string> {
        const text = await this.installationCommandTextLocator.textContent();
        if (text === null) {
            throw new Error('Не вдалося отримати текст команди інсталяції');
        }
        return text;
    }
}
