import { Metadata } from 'next';
import { Checkout } from 'features/checkout';

export const metadata: Metadata = {
  title: 'Оформление заказа',
};

export default function CheckoutPage() {
  return <Checkout />;
}
