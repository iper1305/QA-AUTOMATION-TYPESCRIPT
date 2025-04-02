import { type Locator, type Page } from '@playwright/test';
import {HeaderComponent} from "../components/header-component";
import {SidebarComponent} from "../components/sidebar-component";
import {ArticleComponent} from "../components/article-component";

export class DocsPage {
    public readonly page: Page;
    public readonly pageUrl = '/docs/intro';

    private get headerRootLocator(): Locator {
        return this.page.locator('nav[aria-label="Main"]');
    }

    private get sidebarRootLocator(): Locator {
        return this.page.locator('nav[aria-label="Docs sidebar"]');
    }

    private get articleRootLocator(): Locator {
        return this.page.locator('article[class*="docItemContainer"]');
    }

    public readonly header: HeaderComponent;
    public readonly sidebar: SidebarComponent;
    public readonly article: ArticleComponent;

    public constructor(page: Page) {
        this.page = page;

        this.header = new HeaderComponent(this.headerRootLocator);
        this.sidebar = new SidebarComponent(this.sidebarRootLocator);
        this.article = new ArticleComponent(this.articleRootLocator);
    }

    public async goto(path: string = this.pageUrl): Promise<void> {
        await this.page.goto(path);
    }

    public async getPageTitle(): Promise<string> {
        return await this.page.title();
    }
}
