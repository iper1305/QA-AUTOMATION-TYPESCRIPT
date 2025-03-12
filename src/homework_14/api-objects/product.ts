import { IProductData } from '../interfaces/i-product-data';
import { IProduct } from '../interfaces/i-product';
import stripeService from '../services/stripe-service';

class Product {
    public static async create(productData: IProductData): Promise<IProduct> {
        return stripeService.post<IProduct>('/products', productData);
    }

    public static async retrieve(productId: string): Promise<IProduct> {
        return stripeService.get<IProduct>(`/products/${productId}`);
    }

    public static async update(productId: string, productData: Partial<IProductData>): Promise<IProduct> {
        return stripeService.post<IProduct>(`/products/${productId}`, productData);
    }

    public static async list(limit = 10): Promise<{ data: IProduct[]; has_more: boolean; url: string }> {
        return stripeService.get<{ data: IProduct[]; has_more: boolean; url: string }>('/products', { limit });
    }

    public static async delete(productId: string): Promise<void> {
        return stripeService.delete(`/products/${productId}`);
    }
}

export default Product;
