import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login-page';

test.describe('GitHub Login Tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.goTo();
        await expect(page.locator('form[action="/session"]')).toBeVisible();
    });

    test('Login with invalid credentials', async ({ page }) => {
        await loginPage.login('invalid_user', 'invalid_password');
        await expect(page.getByText('Incorrect username or password.')).toBeVisible();
    });
});
