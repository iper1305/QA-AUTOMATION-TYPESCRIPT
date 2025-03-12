export interface IPaymentIntent {
    id: string;
    object: string;
    amount: number;
    amount_capturable: number;
    amount_received: number;
    application: string | null;
    application_fee_amount: number | null;
    automatic_payment_methods: {
        enabled: boolean;
        allow_redirects: string | null;
    } | null;
    canceled_at: number | null;
    cancellation_reason: string | null;
    capture_method: string;
    client_secret: string;
    confirmation_method: string;
    created: number;
    currency: string;
    customer: string | null;
    description: string | null;
    invoice: string | null;
    last_payment_error: {
        charge: string;
        code: string;
        decline_code: string;
        doc_url: string;
        message: string;
        param: string;
        payment_method: {
            id: string;
            object: string;
            type: string;
        };
        type: string;
    } | null;
    latest_charge: string | null;
    livemode: boolean;
    metadata: Record<string, string>;
    next_action: {
        type: string;
        redirect_to_url: {
            return_url: string;
            url: string;
        };
    } | null;
    on_behalf_of: string | null;
    payment_method: string | null;
    payment_method_options: Record<string, unknown>;
    payment_method_types: string[];
    processing: null;
    receipt_email: string | null;
    review: string | null;
    setup_future_usage: string | null;
    shipping: {
        address: {
            city: string | null;
            country: string | null;
            line1: string | null;
            line2: string | null;
            postal_code: string | null;
            state: string | null;
        };
        carrier: string | null;
        name: string;
        phone: string | null;
        tracking_number: string | null;
    } | null;
    statement_descriptor: string | null;
    statement_descriptor_suffix: string | null;
    status: string;
    transfer_data: {
        amount: number | null;
        destination: string;
    } | null;
    transfer_group: string | null;
}
