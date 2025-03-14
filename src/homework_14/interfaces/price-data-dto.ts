export interface PriceDataDto {
    product: string;
    unit_amount: number;
    currency: string;
    recurring?: {
        interval: 'day' | 'week' | 'month' | 'year';
        interval_count?: number;
    };
    [key: string]: unknown;
}
