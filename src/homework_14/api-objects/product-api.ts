import { ProductDataDto } from '../interfaces/product-data-dto';
import { IProduct } from '../interfaces/i-product';
import stripeService from '../services/stripe-service';

class ProductApi {
    public async create(productData: ProductDataDto): Promise<IProduct> {
        return stripeService.post<IProduct>('/products', productData);
    }

    public async get(productId: string): Promise<IProduct> {
        return stripeService.get<IProduct>(`/products/${productId}`);
    }

    public async update(productId: string, productData: Partial<ProductDataDto>): Promise<IProduct> {
        return stripeService.post<IProduct>(`/products/${productId}`, productData);
    }

    public async list(limit = 10): Promise<{ data: IProduct[]; has_more: boolean; url: string }> {
        return stripeService.get<{ data: IProduct[]; has_more: boolean; url: string }>('/products', { limit });
    }

    public async delete(productId: string): Promise<void> {
        return stripeService.delete(`/products/${productId}`);
    }
}

export default new ProductApi();
