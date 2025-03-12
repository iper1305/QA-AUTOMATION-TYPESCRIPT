export interface IProductData {
    name: string;
    description?: string;
    active?: boolean;
    metadata?: Record<string, string>;
    images?: string[];
    statement_descriptor?: string;
    unit_label?: string;
}
