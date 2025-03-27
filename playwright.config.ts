import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './src/homework_18/tests',
    reporter: [
        ['list'],
        ['allure-playwright']
    ],
    use: {
        baseURL: 'https://github.com',
        screenshot: 'only-on-failure',
        video: 'retain-on-failure'
    },
    retries: 1
});
