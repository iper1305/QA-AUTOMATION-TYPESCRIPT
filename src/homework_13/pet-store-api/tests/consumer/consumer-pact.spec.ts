import { describe, it } from 'mocha';
import axios from 'axios';
import * as chai from 'chai';
import { MatchersV3 } from '@pact-foundation/pact';
import {pact} from '../../pact-config/pact-config';

describe('PetStore API Consumer Contract', () => {
    describe('Getting a pet by ID', () => {
        const petId = 1;
        const expectedPet = {
            id: MatchersV3.number(petId),
            name: MatchersV3.string('Fluffy'),
            status: MatchersV3.string('available')
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
                    body: expectedPet
                }
            };

            await pact.addInteraction(interaction);

            await pact.executeTest(async (mockServer) => {
                const response = await axios.get(`${mockServer.url}/pet/${petId}`, {
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
