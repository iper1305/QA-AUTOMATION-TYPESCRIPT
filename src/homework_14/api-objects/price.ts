import { IPriceData } from '../interfaces/i-price-data';
import { IPrice } from '../interfaces/i-price';
import stripeService from '../services/stripe-service';

class Price {
    public static async create(priceData: IPriceData): Promise<IPrice> {
        return stripeService.post<IPrice>('/prices', priceData);
    }

    public static async retrieve(priceId: string): Promise<IPrice> {
        return stripeService.get<IPrice>(`/prices/${priceId}`);
    }

    public static async update(priceId: string, priceData: Partial<IPriceData>): Promise<IPrice> {
        return stripeService.post<IPrice>(`/prices/${priceId}`, priceData);
    }

    public static async list(limit = 10): Promise<{ data: IPrice[]; has_more: boolean; url: string }> {
        return stripeService.get<{ data: IPrice[]; has_more: boolean; url: string }>('/prices', { limit });
    }

    public static async delete(priceId: string): Promise<void> {
        return stripeService.delete(`/prices/${priceId}`);
    }
}

export default Price;
