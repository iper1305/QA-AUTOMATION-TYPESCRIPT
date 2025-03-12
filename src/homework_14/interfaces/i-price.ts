export interface IPrice {
    id: string;
    object: string;
    active: boolean;
    billing_scheme: string;
    created: number;
    currency: string;
    custom_unit_amount: {
        maximum: number | null;
        minimum: number | null;
        preset: number | null;
    } | null;
    livemode: boolean;
    lookup_key: string | null;
    metadata: Record<string, string>;
    nickname: string | null;
    product: string;
    recurring: {
        aggregate_usage: string | null;
        interval: string;
        interval_count: number;
        trial_period_days: number | null;
        usage_type: string;
    } | null;
    tax_behavior: string | null;
    tiers_mode: string | null;
    transform_quantity: {
        divide_by: number;
        round: string;
    } | null;
    type: string;
    unit_amount: number | null;
    unit_amount_decimal: string | null;
}
