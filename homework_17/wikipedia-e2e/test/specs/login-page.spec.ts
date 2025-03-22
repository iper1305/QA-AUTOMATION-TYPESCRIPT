import LoginPage from '../../src/pages/login-page';
import { expect } from 'chai';

describe('Login Page', () => {
    it('should load the login page', async () => {
        await LoginPage.open();
        const url = await browser.getUrl();
        expect(url).to.include('Special:UserLogin');
    });
});
