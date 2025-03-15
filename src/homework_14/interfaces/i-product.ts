export interface IProduct {
    id: string;
    object: string;
    active: boolean;
    attributes: string[];
    created: number;
    default_price: string | null;
    description: string | null;
    images: string[];
    livemode: boolean;
    metadata: Record<string, string>;
    name: string;
    package_dimensions: {
        height: number;
        length: number;
        weight: number;
        width: number;
    } | null;
    shippable: boolean | null;
    statement_descriptor: string | null;
    tax_code: string | null;
    type: string;
    unit_label: string | null;
    updated: number;
    url: string | null;
}
