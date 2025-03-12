import {IProductData} from '../interfaces/i-product-data';
import stripeService from '../services/stripe-service';

class Product {
    public static async create(productData: IProductData): Promise<IProductData> {
        return stripeService.post<IProductData>('/products', productData);
    }

    public static async retrieve(productId: string): Promise<IProductData> {
        return stripeService.get<IProductData>(`/products/${productId}`);
    }

    public static async update(productId: string, productData: Partial<IProductData>): Promise<IProductData> {
        return stripeService.post<IProductData>(`/products/${productId}`, productData);
    }

    public static async delete(productId: string): Promise<{ deleted: boolean; id: string }> {
        return stripeService.delete<{ deleted: boolean; id: string }>(`/products/${productId}`);
    }

    public static async list(limit = 10): Promise<{ data: IProductData[]; has_more: boolean; url: string }> {
        return stripeService.get<{ data: IProductData[]; has_more: boolean; url: string }>('/products', { limit });
    }
}

export default Product;
