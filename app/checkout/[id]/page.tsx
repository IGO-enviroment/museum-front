import { Metadata } from 'next';
import { CheckoutPage } from 'pgs/checkout';

export const metadata: Metadata = {
  title: 'Оформление заказа',
};

export default function Checkout() {
  return <CheckoutPage />;
}
