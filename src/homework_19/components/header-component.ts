import { type Locator, expect } from '@playwright/test';

export class HeaderComponent {
    private rootLocator: Locator;

    private get logoLocator(): Locator {
        return this.rootLocator.locator('a.navbar__brand');
    }

    private get searchButtonLocator(): Locator {
        return this.rootLocator.locator('button.DocSearch');
    }

    public constructor(locator: Locator) {
        this.rootLocator = locator;
    }

    public async expectLogoToBeVisible():Promise<void> {
        await expect(this.logoLocator).toBeVisible();
    }

    public async clickLogo():Promise<void>  {
        await this.logoLocator.click();
    }

    public async clickSearch():Promise<void>  {
        await this.searchButtonLocator.click();
    }
}
