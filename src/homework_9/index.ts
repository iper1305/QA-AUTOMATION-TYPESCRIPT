import { IPaymentMethod } from './i-payment-method';
import { CreditCardPayment } from './credit-card-payment';
import { PayPalPayment } from './pay-pal-payment';
import { CryptoPayment } from './crypto-payment';

async function processPayment(
    paymentMethod: IPaymentMethod,
    amount: number
): Promise<boolean> {
    if (!paymentMethod.validatePayment(amount)) {
        throw new Error('Invalid payment amount');
    }

    console.log(
        `Starting payment processing using ${paymentMethod.getPaymentDetails()}`
    );
    return await paymentMethod.processPayment(amount);
}

export async function main(): Promise<void> {
    const creditCard = new CreditCardPayment('4111111111111111', '12/25');
    const payPal = new PayPalPayment('user@example.com');
    const crypto = new CryptoPayment(
        '0x742d35Cc6634C0532925a3b844Bc454e4438f44e'
    );

    try {
        console.log('Processing different payment methods:');

        await processPayment(creditCard, 100);
        await processPayment(payPal, 150);
        await processPayment(crypto, 200);
    } catch (error) {
        console.error('Payment error:', error);
    }
}

main();
