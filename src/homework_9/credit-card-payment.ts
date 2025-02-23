import {IPaymentMethod} from './i-payment-method';

export class CreditCardPayment implements IPaymentMethod {
    private cardNumber: string;
    private expiryDate: string;
    private minAmount = 0.01;
    private maxAmount = 100000;

    public constructor(cardNumber: string, expiryDate: string) {
        this.cardNumber = cardNumber;
        this.expiryDate = expiryDate;
    }

    public async processPayment(amount: number): Promise<boolean> {
        console.log(`Processing credit card payment of ${amount}`);
        return new Promise(resolve => setTimeout(() => resolve(true), 1000));
    }

    public validatePayment(amount: number): boolean {
        return amount >= this.minAmount && amount <= this.maxAmount;
    }

    public getPaymentDetails(): string {
        return `Credit Card: ${this.cardNumber.slice(-4)}`;
    }
}
