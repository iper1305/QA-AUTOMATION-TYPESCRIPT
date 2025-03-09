import { describe, it } from 'mocha';
import axios from 'axios';
import * as chai from 'chai';
import { MatchersV3 } from '@pact-foundation/pact';
import { pact } from './pact-config';
import { IPet } from './i-pet';

describe('PetStore API Consumer Contract', () => {
    describe('Getting a pet by ID', () => {
        const petId = 1;
        const expectedPet: IPet = {
            id: petId,
            name: MatchersV3.string('Fluffy'),
            status: MatchersV3.fromProviderState('available', 'available')
        };

        it('returns pet data', async () => {
            const interaction = {
                states: [{ description: 'a pet with ID 1 exists' }],
                uponReceiving: 'a request to get a pet by ID 1',
                withRequest: {
                    method: 'GET',
                    path: `/pet/${petId}`,
                    headers: { Accept: 'application/json' }
                },
                willRespondWith: {
                    status: 200,
                    headers: { 'Content-Type': 'application/json' },
                    body: MatchersV3.eachLike(expectedPet)
                }
            };

            await pact.addInteraction(interaction);

            await pact.executeTest(async () => {
                const response = await axios.get(`http://localhost:5678/pet/${petId}`, {
                    headers: { Accept: 'application/json' }
                });

                chai.expect(response.status).to.equal(200);
                chai.expect(response.data).to.deep.include({
                    id: petId,
                    name: 'Fluffy',
                    status: 'available'
                });
            });
        });
    });
});
