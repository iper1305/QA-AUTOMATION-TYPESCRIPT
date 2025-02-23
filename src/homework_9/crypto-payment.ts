import {IPaymentMethod} from './i-payment-method';

export class CryptoPayment implements IPaymentMethod {
    private walletAddress: string;
    private minAmount = 0.0001;
    private maxAmount = 1000000;

    public constructor(walletAddress: string) {
        this.walletAddress = walletAddress;
    }

    public async processPayment(amount: number): Promise<boolean> {
        console.log(`Processing crypto payment of ${amount}`);
        return new Promise(resolve => setTimeout(() => resolve(true), 1500));
    }

    public validatePayment(amount: number): boolean {
        return amount >= this.minAmount && amount <= this.maxAmount;
    }

    public getPaymentDetails(): string {
        return `Crypto Wallet: ${this.walletAddress.slice(0, 8)}...`;
    }
}
