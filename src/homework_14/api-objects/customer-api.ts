import { ICustomer } from '../interfaces/i-customer';
import stripeService from '../services/stripe-service';
import {CustomerDataDto} from '../interfaces/customer-data-dto';

class CustomerApi {
    public async create(customerData: CustomerDataDto): Promise<ICustomer> {
        return stripeService.post<ICustomer>('/customers', customerData);
    }

    public async get(customerId: string): Promise<ICustomer> {
        return stripeService.get<ICustomer>(`/customers/${customerId}`);
    }

    public async update(customerId: string, customerData: Partial<CustomerDataDto>): Promise<ICustomer> {
        return stripeService.post<ICustomer>(`/customers/${customerId}`, customerData);
    }

    public async list(limit = 10): Promise<{ data: ICustomer[]; has_more: boolean; url: string }> {
        return stripeService.get<{ data: ICustomer[]; has_more: boolean; url: string }>('/customers', { limit });
    }

    public async delete(customerId: string): Promise<void> {
        return stripeService.delete(`/customers/${customerId}`);
    }
}

export default new CustomerApi();
