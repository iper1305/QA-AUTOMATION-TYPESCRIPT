export interface IPaymentMethod {
    processPayment(amount: number): Promise<boolean>;
    validatePayment(amount: number): boolean;
    getPaymentDetails(): string;
}
