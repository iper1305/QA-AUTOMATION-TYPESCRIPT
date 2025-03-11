import { Verifier } from '@pact-foundation/pact';
import * as path from 'path';

describe('Pact Verification', () => {
    it('validates the expectations of PetStoreClient', async function (this: Mocha.Context) {
        this.timeout(10000); // Додати таймаут, щоб дати більше часу для підключення

        const opts = {
            providerBaseUrl: 'https://petstore.swagger.io/v2', // URL вашого працюючого API
            pactUrls: [path.resolve(__dirname, '../../pacts')],
            provider: 'PetStoreAPI',
            providerVersion: '1.0.0'
            // stateHandlers: {
            //     'a pet with ID 1 exists': async () => {
            //         // Налаштуйте стан провайдера тут (наприклад, переконайтеся, що pet з ID 1 існує в базі даних)
            //         return Promise.resolve();
            //     }
            // }
        };

        const verifier = new Verifier(opts);
        await verifier.verifyProvider();
    });
});
