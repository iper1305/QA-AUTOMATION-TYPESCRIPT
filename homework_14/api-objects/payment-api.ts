import { IPaymentData } from '../interfaces/i-payment-data';
import { CancelPaymentDataDto } from '../interfaces/cancel-payment-data-dto';
import { PaymentIntentDataDto } from '../interfaces/payment-intent-data-dto';
import stripeService from '../services/stripe-service';

class PaymentApi {
    public async createPaymentIntent(paymentIntentData: IPaymentData): Promise<PaymentIntentDataDto> {
        return stripeService.post<PaymentIntentDataDto>('/payment_intents', paymentIntentData);
    }

    public async get(paymentIntentId: string): Promise<PaymentIntentDataDto> {
        return stripeService.get<PaymentIntentDataDto>(`/payment_intents/${paymentIntentId}`);
    }

    public async cancelPayment(paymentIntentId: string, cancelPaymentIntentData: CancelPaymentDataDto): Promise<PaymentIntentDataDto> {
        return stripeService.post<PaymentIntentDataDto>(`/payment_intents/${paymentIntentId}/cancel`, cancelPaymentIntentData);
    }

    public async listPaymentIntents(limit = 10): Promise<{ data: PaymentIntentDataDto[]; has_more: boolean; url: string }> {
        return stripeService.get<{ data: PaymentIntentDataDto[]; has_more: boolean; url: string }>('/payment_intents', { limit });
    }
}

export default new PaymentApi();
