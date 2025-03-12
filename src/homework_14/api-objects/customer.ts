import {ICustomerData} from '../interfaces/i-customer-data';
import {ICustomer} from '../interfaces/i-customer';
import stripeService from '../services/stripe-service';

class Customer {
    public static async create(customerData: ICustomerData): Promise<ICustomer> {
        return stripeService.post<ICustomer>('/customers', customerData);
    }

    public static async retrieve(customerId: string): Promise<ICustomer> {
        return stripeService.get<ICustomer>(`/customers/${customerId}`);
    }

    public static async update(customerId: string, customerData: Partial<ICustomerData>): Promise<ICustomer> {
        return stripeService.post<ICustomer>(`/customers/${customerId}`, customerData);
    }

    public static async delete(customerId: string): Promise<{ deleted: boolean; id: string }> {
        return stripeService.delete<{ deleted: boolean; id: string }>(`/customers/${customerId}`);
    }

    public static async list(limit = 10): Promise<{ data: ICustomer[]; has_more: boolean; url: string }> {
        return stripeService.get<{ data: ICustomer[]; has_more: boolean; url: string }>('/customers', { limit });
    }
}

export default Customer;
