import { expect } from 'chai';
import customerApi from '../api-objects/customer-api';
import priceApi from '../api-objects/price-api';
import paymentApi from '../api-objects/payment-api';
import productApi from '../api-objects/product-api';

describe('Stripe API tests', () => {
    let customerId: string;
    let productId: string;
    let priceId: string;
    let paymentIntentId: string;

    it('Creating new client', async () => {
        const customerData = {
            email: `test-${Date.now()}@example.com`,
            name: 'Test Customer',
            description: 'Created for API testing'
        };

        const customer = await customerApi.create(customerData);
        customerId = customer.id;

        expect(customer).to.exist;
        expect(customer.id).to.exist;
        expect(customer.email).to.equal(customerData.email);
        expect(customer.name).to.equal(customerData.name);
        expect(customer.description).to.equal(customerData.description);
    });

    it('Creating new product', async () => {
        const productData = {
            name: `Test Product ${Date.now()}`,
            description: 'Product created for API testing',
            active: true
        };

        const product = await productApi.create(productData);
        productId = product.id;

        expect(product).to.exist;
        expect(product.id).to.exist;
        expect(product.name).to.equal(productData.name);
        expect(product.description).to.equal(productData.description);
        expect(product.active).to.equal(productData.active);
    });

    it('Creating price for product', async () => {
        const priceData = {
            product: productId,
            unit_amount: 2000,
            currency: 'usd',
            recurring: {
                interval: 'month' as 'day' | 'week' | 'month' | 'year',
                interval_count: 1
            }
        };

        const price = await priceApi.create(priceData);
        priceId = price.id;

        expect(price).to.exist;
        expect(price.id).to.exist;
        expect(price.product).to.equal(productId);
        expect(price.unit_amount).to.equal(priceData.unit_amount);
        expect(price.currency).to.equal(priceData.currency);
        expect(price.recurring?.interval).to.equal(priceData.recurring.interval);
    });

    it('Create payment', async () => {
        const paymentData = {
            amount: 2000,
            currency: 'usd',
            customer: customerId,
            payment_method_types: ['card']
        };

        const paymentIntent = await paymentApi.createPaymentIntent(paymentData);
        paymentIntentId = paymentIntent.id;

        expect(paymentIntent).to.exist;
        expect(paymentIntent.id).to.exist;
        expect(paymentIntent.amount).to.equal(paymentData.amount);
        expect(paymentIntent.currency).to.equal(paymentData.currency);
        expect(paymentIntent.customer).to.equal(customerId);
        expect(paymentIntent.status).to.exist;
    });

    it('Cancel payment', async () => {
        const cancelData = {
            cancellation_reason: 'requested_by_customer' as 'requested_by_customer' | 'duplicate' | 'fraudulent' | 'abandoned'
        };

        const cancelledPaymentIntent = await paymentApi.cancelPayment(paymentIntentId, cancelData);

        expect(cancelledPaymentIntent).to.exist;
        expect(cancelledPaymentIntent.id).to.equal(paymentIntentId);
        expect(cancelledPaymentIntent.status).to.equal('canceled');
        expect(cancelledPaymentIntent.cancellation_reason).to.equal(cancelData.cancellation_reason);
    });

    after(async () => {
        if (priceId) {
            try {
                console.log(`Deactivating price ${priceId}`);
                await priceApi.update(priceId, { active: false });
            } catch (error) {
                console.error(`Failed to deactivate price ${priceId}`, error);
            }
        }

        if (productId) {
            try {
                console.log(`Deactivating product ${productId}`);
                await productApi.update(productId, { active: false });
            } catch (error) {
                console.error(`Failed to deactivate product ${productId}`, error);
            }
        }

        if (customerId) {
            try {
                console.log(`Deleting customer ${customerId}`);
                await customerApi.delete(customerId);
            } catch (error) {
                console.error(`Failed to delete customer ${customerId}`, error);
            }
        }
    });
});
