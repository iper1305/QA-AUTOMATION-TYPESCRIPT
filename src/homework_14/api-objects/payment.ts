import { IPaymentIntentData } from '../interfaces/i-payment-intent-data';
import { ICancelPaymentIntentData } from '../interfaces/i-cancel-payment-intent-data';
import { IPaymentIntent } from '../interfaces/i-payment-intent';
import stripeService from '../services/stripe-service';

class Payment {
    public static async createPaymentIntent(paymentIntentData: IPaymentIntentData): Promise<IPaymentIntent> {
        return stripeService.post<IPaymentIntent>('/payment_intents', paymentIntentData);
    }

    public static async retrievePaymentIntent(paymentIntentId: string): Promise<IPaymentIntent> {
        return stripeService.get<IPaymentIntent>(`/payment_intents/${paymentIntentId}`);
    }

    public static async cancelPayment(paymentIntentId: string, cancelPaymentIntentData: ICancelPaymentIntentData): Promise<IPaymentIntent> {
        return stripeService.post<IPaymentIntent>(`/payment_intents/${paymentIntentId}/cancel`, cancelPaymentIntentData);
    }

    public static async listPaymentIntents(limit = 10): Promise<{ data: IPaymentIntent[]; has_more: boolean; url: string }> {
        return stripeService.get<{ data: IPaymentIntent[]; has_more: boolean; url: string }>('/payment_intents', { limit });
    }
}

export default Payment;
