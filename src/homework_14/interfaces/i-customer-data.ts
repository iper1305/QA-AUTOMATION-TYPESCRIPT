export interface ICustomerData {
    email: string;
    name: string;
    description?: string;
    address?: {
        city?: string;
        country?: string;
        line1?: string;
        line2?: string;
        postal_code?: string;
        state?: string;
    };
    phone?: string;
    metadata?: Record<string, string>;
    shipping?: {
        address: {
            city?: string;
            country?: string;
            line1?: string;
            line2?: string;
            postal_code?: string;
            state?: string;
        };
        name: string;
        phone?: string;
    };
}
