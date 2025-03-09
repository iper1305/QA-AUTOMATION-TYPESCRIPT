import { PactV3 } from '@pact-foundation/pact';
import * as path from 'path';

export const consumerName = 'PetStoreClient';
export const providerName = 'PetStoreAPI';

export const pact = new PactV3({
    consumer: consumerName,
    provider: providerName,
    port: 5678,
    logLevel: 'debug',
    dir: path.resolve(__dirname, '../../../pacts')
});
