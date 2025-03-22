import { expect } from 'chai';
import LoginPage from '../../src/pages/login-page';
import UserPage from '../../src/pages/user-page';

describe('User Page', () => {
    it('should display username after login', async () => {
        await LoginPage.open();
        await LoginPage.login('Test-e2e', 'bvhjbgh464FGfg');
        const username = await UserPage.getUserNameText();
        expect(username).to.not.be.empty;
    });
});
