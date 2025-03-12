export interface IProductData {
    name: string;
    description?: string;
    active?: boolean;
    [key: string]: unknown;
}
