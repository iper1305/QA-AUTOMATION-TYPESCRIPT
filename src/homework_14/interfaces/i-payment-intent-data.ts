export interface IPaymentIntentData {
    amount: number;
    currency: string;
    customer?: string;
    payment_method_types?: string[];
    [key: string]: unknown;
}
