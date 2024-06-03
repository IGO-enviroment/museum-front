'use client';

import classNames from 'classnames/bind';
import { Layout } from 'shared/ui/layout';
import styles from './checkout-page.module.scss';
import BG from '../../../../../public/checkout/checkout-bg.png';
import { CheckoutForm } from 'widget/checkout-form';
import { PageContainer } from 'shared/ui/page-container';

const cx = classNames.bind(styles);

export function CheckoutPage() {
  return (
    <PageContainer
      title='Съемки фильма «Бажов. Одолженное время» на площадках МИЕ'
      description='13.04.2024'
      imageSrc={BG}
    >
      <Layout>
        <h2 className={cx('section-title')}>Покупка билета</h2>
        <CheckoutForm />
      </Layout>
    </PageContainer>
  );
}
