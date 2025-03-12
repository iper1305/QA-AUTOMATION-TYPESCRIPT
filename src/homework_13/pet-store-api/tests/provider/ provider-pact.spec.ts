import { Verifier } from '@pact-foundation/pact';
import * as path from 'path';
import axios from 'axios';

describe('Pact Verification', () => {
    it('validates the expectations of PetStoreClient', async function (this: Mocha.Context) {
        this.timeout(10000);

        const opts = {
            providerBaseUrl: 'https://petstore.swagger.io/v2',
            pactUrls: [path.resolve(__dirname, '../../pacts')],
            provider: 'PetStoreAPI',
            providerVersion: '1.0.0',
            stateHandlers: {
                'a pet with ID 1 exists': async () => {
                    const response = await axios.get('https://petstore.swagger.io/v2/pet/1');
                    if (response.status === 200 && response.data.id === 1) {
                        return Promise.resolve();
                    } else {
                        return Promise.reject(new Error('Pet with ID 1 does not exist'));
                    }
                }
            }
        };

        const verifier = new Verifier(opts);
        await verifier.verifyProvider();
    });
});
