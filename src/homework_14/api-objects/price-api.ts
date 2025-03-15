import { PriceDataDto } from '../interfaces/price-data-dto';
import { IPrice } from '../interfaces/i-price';
import stripeService from '../services/stripe-service';

class PriceApi {
    public async create(priceData: PriceDataDto): Promise<IPrice> {
        return stripeService.post<IPrice>('/prices', priceData);
    }

    public async get(priceId: string): Promise<IPrice> {
        return stripeService.get<IPrice>(`/prices/${priceId}`);
    }

    public async update(priceId: string, priceData: Partial<PriceDataDto>): Promise<IPrice> {
        return stripeService.post<IPrice>(`/prices/${priceId}`, priceData);
    }

    public async list(limit = 10): Promise<{ data: IPrice[]; has_more: boolean; url: string }> {
        return stripeService.get<{ data: IPrice[]; has_more: boolean; url: string }>('/prices', { limit });
    }

    public async delete(priceId: string): Promise<void> {
        return stripeService.delete(`/prices/${priceId}`);
    }
}

export default new PriceApi();
