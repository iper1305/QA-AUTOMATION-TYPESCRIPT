export interface ProductDataDto {
    name: string;
    description?: string;
    active?: boolean;
    [key: string]: unknown;
}
