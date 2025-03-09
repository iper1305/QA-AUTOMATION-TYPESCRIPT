import {CatApiClient} from './cat-api-client';
import { expect } from 'chai';
import { describe, before, after, it } from 'mocha';
import {Favourite} from './favourite';
import * as dotenv from 'dotenv';
dotenv.config();

describe('The Cat API Integration Tests', function () {
    this.timeout(5000);
    let apiClient: CatApiClient;
    let testImageId: string;
    let testVoteId: number;
    let testFavouriteId: number;

    before(function () {
        const apiKey = process.env.CAT_API_KEY;
        if (!apiKey) {
            console.warn('CAT_API_KEY not found, skipping tests.');
            return;
        }
        apiClient = new CatApiClient(apiKey);
    });

    after(async function () {
        if (!apiClient) {
            console.warn('apiClient is not initialized, skipping cleanup.');
            return;
        }

        try {
            const votes = await apiClient.getVotes();
            for (const vote of votes) {
                await apiClient.deleteVote(vote.id);
            }

            const favourites = await apiClient.getFavourites();
            for (const favourite of favourites) {
                await apiClient.deleteFavourite(favourite.id);
            }
        } catch (error) {
            console.error('Error cleaning up test data:', error);
        }
    });

    describe('Images Module', () => {
        it('should get random cat images', async () => {
            const images = await apiClient.getRandomImages(3);
            expect(images).to.have.lengthOf(3);
            expect(images[0]).to.have.property('id');
            expect(images[0]).to.have.property('url');

            testImageId = images[0].id;
        });
    });

    describe('Votes Module and Integration with Images', () => {
        it('should create a vote for an image', async () => {
            const vote = await apiClient.createVote(testImageId, 1);
            expect(vote).to.have.property('id');
            expect(vote.image_id).to.equal(testImageId);
            expect(vote.value).to.equal(1);
            expect(vote.sub_id).to.equal(apiClient.getSubId());

            testVoteId = vote.id;
        });

        it('should retrieve votes for user', async () => {
            const votes = await apiClient.getVotes();
            expect(votes.length).to.be.greaterThan(0);

            const foundVote = votes.find(v => v.id === testVoteId);
            expect(foundVote).to.exist;
            expect(foundVote?.image_id).to.equal(testImageId);
        });

        it('should delete a vote', async () => {
            const response = await apiClient.deleteVote(testVoteId);
            expect(response).to.have.property('message');
            expect(response.message).to.match(/success/i);

            const votes = await apiClient.getVotes();
            const foundVote = votes.find(v => v.id === testVoteId);
            expect(foundVote).to.be.undefined;
        });
    });

    describe('Favourites Module and Integration with Images', () => {
        it('should add an image to favourites', async () => {
            const favourite = await apiClient.addToFavourites(testImageId);
            expect(favourite).to.have.property('id');

            testFavouriteId = favourite.id;
        });

        it('should retrieve favourites for user', async () => {
            const favourites = await apiClient.getFavourites();
            expect(favourites.length).to.be.greaterThan(0);

            const foundFavourite = favourites.find(f => f.id === testFavouriteId);
            expect(foundFavourite).to.exist;
            expect(foundFavourite?.image_id).to.equal(testImageId);
        });

        it('should delete a favourite', async () => {
            const response = await apiClient.deleteFavourite(testFavouriteId);
            expect(response).to.have.property('message');
            expect(response.message).to.match(/success/i);

            const favourites: Favourite[] = await apiClient.getFavourites();
            const foundFavourite: Favourite | undefined = favourites.find(f => f.id === testFavouriteId);
            expect(foundFavourite).to.be.undefined;
        });
    });

    describe('Complex Integrations Between All Modules', () => {
        let complexImageId: string;
        let complexVoteId: number;
        let complexFavouriteId: number;

        it('should perform full workflow with image, vote, and favourite', async () => {
            const images = await apiClient.getRandomImages(1);
            complexImageId = images[0].id;
            expect(complexImageId).to.exist;

            const vote = await apiClient.createVote(complexImageId, 1);
            complexVoteId = vote.id;
            expect(vote.image_id).to.equal(complexImageId);

            const favourite = await apiClient.addToFavourites(complexImageId);
            complexFavouriteId = favourite.id;

            const votes = await apiClient.getVotes();
            const foundVote = votes.find(v => v.id === complexVoteId);
            expect(foundVote).to.exist;

            const favourites = await apiClient.getFavourites();
            const foundFavourite = favourites.find(f => f.id === complexFavouriteId);
            expect(foundFavourite).to.exist;

            await apiClient.deleteVote(complexVoteId);
            await apiClient.deleteFavourite(complexFavouriteId);

            const updatedVotes = await apiClient.getVotes();
            const updatedFavourites = await apiClient.getFavourites();

            expect(updatedVotes.find(v => v.id === complexVoteId)).to.be.undefined;
            expect(updatedFavourites.find(f => f.id === complexFavouriteId)).to.be.undefined;
        });
    });
});
