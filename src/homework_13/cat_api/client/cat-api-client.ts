import axios, { AxiosInstance } from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { ICatImage } from '../interfaces/i-cat-image';
import { IVote } from '../interfaces/i-vote';
import { IFavourite } from '../interfaces/i-favourite';
import { IDeleteResponse } from '../interfaces/i-delete-response';

export class CatApiClient {
    private client: AxiosInstance;
    private subId: string;

    public constructor(apiKey: string) {
        this.client = axios.create({
            baseURL: 'https://api.thecatapi.com/v1',
            headers: {
                'x-api-key': apiKey
            }
        });
        this.subId = `test-${uuidv4()}`;
    }

    public async getRandomImages(limit = 1): Promise<ICatImage[]> {
        const response = await this.client.get('/images/search', {
            params: { limit }
        });
        return response.data;
    }

    public async createVote(imageId: string, value: 1 | 0): Promise<IVote> {
        const response = await this.client.post('/votes', {
            image_id: imageId,
            sub_id: this.subId,
            value
        });
        return response.data;
    }

    public async getVotes(): Promise<IVote[]> {
        const response = await this.client.get('/votes', {
            params: { sub_id: this.subId }
        });
        return response.data;
    }

    public async deleteVote(voteId: number): Promise<IDeleteResponse> {
        const response = await this.client.delete(`/votes/${voteId}`);
        return response.data;
    }

    public async addToFavourites(imageId: string): Promise<IFavourite> {
        const response = await this.client.post('/favourites', {
            image_id: imageId,
            sub_id: this.subId
        });
        return response.data;
    }

    public async getFavourites(): Promise<IFavourite[]> {
        const response = await this.client.get('/favourites', {
            params: { sub_id: this.subId }
        });
        return response.data;
    }

    public async deleteFavourite(favouriteId: number): Promise<IDeleteResponse> {
        const response = await this.client.delete(`/favourites/${favouriteId}`);
        return response.data;
    }

    public getSubId(): string {
        return this.subId;
    }
}
