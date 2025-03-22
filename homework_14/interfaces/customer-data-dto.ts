export interface CustomerDataDto {
    email: string;
    name: string;
    description?: string;
    [key: string]: unknown;
}
