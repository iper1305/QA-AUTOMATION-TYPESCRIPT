export interface ICustomerData {
    email: string;
    name: string;
    description?: string;
    [key: string]: unknown;
}
