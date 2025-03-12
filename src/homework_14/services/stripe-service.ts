import axios, { AxiosInstance, AxiosError } from 'axios';
import * as dotenv from 'dotenv';
dotenv.config({ path: './src/homework_14/.env' });

dotenv.config();

class StripeService {
    private baseURL: string;
    private client: AxiosInstance;

    public constructor() {
        this.baseURL = 'https://api.stripe.com/v1';
        const apiKey = process.env.STRIPE_API_KEY;

        if (!apiKey) {
            throw new Error('STRIPE_API_KEY does not exist');
        }

        this.client = axios.create({
            baseURL: this.baseURL,
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    private convertToFormData(params: Record<string, unknown>): string {
        return Object.keys(params)
            .map(key => {
                if (typeof params[key] === 'object' && params[key] !== null) {
                    return Object.keys(params[key] as Record<string, unknown>).map(subKey =>
                        `${encodeURIComponent(`${key}[${subKey}]`)}=${encodeURIComponent((params[key] as Record<string, unknown>)[subKey] as string)}`
                    ).join('&');
                }
                return `${encodeURIComponent(key)}=${encodeURIComponent(params[key] as string)}`;
            })
            .join('&');
    }

    public async get<T>(endpoint: string, params: Record<string, unknown> = {}): Promise<T> {
        try {
            const response = await this.client.get<T>(endpoint, { params });
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    public async post<T>(endpoint: string, data: Record<string, unknown> = {}): Promise<T> {
        try {
            const formData = this.convertToFormData(data);
            const response = await this.client.post<T>(endpoint, formData);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    public async delete<T>(endpoint: string): Promise<T> {
        try {
            const response = await this.client.delete<T>(endpoint);
            return response.data;
        } catch (error) {
            throw this.handleError(error);
        }
    }

    private handleError(error: unknown): Error {
        if (axios.isAxiosError(error)) {
            const axiosError = error as AxiosError;
            if (axiosError.response) {
                return new Error(`Status: ${axiosError.response.status}, Message: ${JSON.stringify(axiosError.response.data)}`);
            } else if (axiosError.request) {
                return new Error(`No response from server: ${axiosError.request}`);
            }
        }
        return new Error(`Error setting up request: ${(error as Error).message}`);
    }
}

export default new StripeService();
