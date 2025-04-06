import { type Locator, expect } from '@playwright/test';

export class SidebarComponent {
    private readonly rootLocator: Locator;

    private get linksLocator(): Locator {
        return this.rootLocator.locator('ul > li > a');
    }

    public constructor(locator: Locator) {
        this.rootLocator = locator;
    }

    public getLinkByTextLocator(text: string): Locator {
        return this.linksLocator.filter({ hasText: text });
    }

    public async clickLinkByText(text: string):Promise<void> {
        await this.getLinkByTextLocator(text).click();
    }

    public async expectLinkIsVisible(text: string):Promise<void>  {
        await expect(this.getLinkByTextLocator(text)).toBeVisible();
    }
}
