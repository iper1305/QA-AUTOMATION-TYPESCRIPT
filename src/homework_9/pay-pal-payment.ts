import {IPaymentMethod} from './i-payment-method';

export class PayPalPayment implements IPaymentMethod {
    private email: string;
    private minAmount = 0.01;
    private maxAmount = 50000;

    public constructor(email: string) {
        this.email = email;
    }

    public async processPayment(amount: number): Promise<boolean> {
        console.log(`Processing PayPal payment of ${amount}`);
        return new Promise(resolve => setTimeout(() => resolve(true), 1000));
    }

    public validatePayment(amount: number): boolean {
        return amount >= this.minAmount && amount <= this.maxAmount;
    }

    public getPaymentDetails(): string {
        return `PayPal: ${this.email}`;
    }
}
