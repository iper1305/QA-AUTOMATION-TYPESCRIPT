import { Page } from 'puppeteer';
import fs from 'fs';
import path from 'path';

export async function captureScreenshot(page: Page, testName: string): Promise<void> {
    const screenshotDir = path.join(__dirname, '../screenshots');
    if (!fs.existsSync(screenshotDir)) {
        fs.mkdirSync(screenshotDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const screenshotPath = path.join(screenshotDir, `${testName}-${timestamp}.png`);

    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Screenshot saved: ${screenshotPath}`);
}

export async function capturePageContent(page: Page, testName: string): Promise<void> {
    const contentDir = path.join(__dirname, '../page-content');
    if (!fs.existsSync(contentDir)) {
        fs.mkdirSync(contentDir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const contentPath = path.join(contentDir, `${testName}-${timestamp}.html`);

    const content = await page.content();
    fs.writeFileSync(contentPath, content);
    console.log(`Page content saved: ${contentPath}`);
}
