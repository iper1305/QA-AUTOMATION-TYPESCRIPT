export interface ICustomer {
    id: string;
    object: string;
    address: {
        city: string | null;
        country: string | null;
        line1: string | null;
        line2: string | null;
        postal_code: string | null;
        state: string | null;
    } | null;
    balance: number;
    created: number;
    currency: string | null;
    default_source: string | null;
    delinquent: boolean;
    description: string | null;
    discount: string | null;
    email: string | null;
    invoice_prefix: string;
    invoice_settings: {
        custom_fields: null | {
            name: string;
            value: string;
        }[];
        default_payment_method: string | null;
        footer: string | null;
    };
    livemode: boolean;
    metadata: Record<string, string>;
    name: string | null;
    next_invoice_sequence: number;
    phone: string | null;
    preferred_locales: string[];
    shipping: {
        address: {
            city: string | null;
            country: string | null;
            line1: string | null;
            line2: string | null;
            postal_code: string | null;
            state: string | null;
        };
        name: string;
        phone: string | null;
    } | null;
    tax_exempt: string | null;
    tax_ids: {
        data: {
            country: string | null;
            created: number;
            customer: string;
            livemode: boolean;
            type: string;
            value: string;
            verification: {
                status: string;
                verified_address: string | null;
                verified_name: string | null;
            } | null;
        }[];
        has_more: boolean;
        url: string;
    };
}
