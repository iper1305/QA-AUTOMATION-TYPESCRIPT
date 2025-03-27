import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test.describe('GitHub Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.page.goto('https://github.com/login');
    });

    test('Login with invalid credentials', async () => {
        await loginPage.login('invalid_user', 'invalid_password');
        await expect(loginPage.page).toHaveURL(/session/);
    });
});
