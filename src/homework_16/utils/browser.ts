import puppeteer, { Browser, Page } from 'puppeteer';

export async function getBrowser(): Promise<Browser> {
    return await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
}

export async function getPage(browser: Browser): Promise<Page> {
    return await browser.newPage();
}

export async function quitBrowser(browser: Browser): Promise<void> {
    await browser.close();
}
