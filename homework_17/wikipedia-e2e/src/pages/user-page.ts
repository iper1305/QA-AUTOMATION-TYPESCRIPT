import { $ } from '@wdio/globals';
import type { ChainablePromiseElement } from 'webdriverio';

export class UserPage {
    public get userName(): ChainablePromiseElement<WebdriverIO.Element> {
        return $('#pt-userpage a');
    }

    public async getUserNameText(): Promise<string> {
        return this.userName.getText();
    }
}

export default new UserPage();
