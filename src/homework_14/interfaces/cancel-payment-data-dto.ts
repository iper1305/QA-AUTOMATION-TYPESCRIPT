export interface CancelPaymentDataDto {
    cancellation_reason: 'requested_by_customer' | 'duplicate' | 'fraudulent' | 'abandoned';
    [key: string]: unknown;
}
