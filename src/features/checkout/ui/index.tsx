'use client';

import classNames from 'classnames/bind';
import { Layout } from 'shared/ui/layout';
import Image from 'next/image';
import styles from './checkout.module.scss';
import BG from '../../../../public/checkout/checkout-bg.png';
import { CheckoutForm } from 'widget/checkout-form/ui/checkout-form';

const cx = classNames.bind(styles);

// @todo - жестко нарушается использование модулей по fsd переделать
export function Checkout() {
  return (
    <div className={styles.root}>
      <div className={styles['main-banner-wrapper']}>
        <div className={styles['main-banner']}>
          <Layout className={styles.description}>
            <h1 className={styles.title}>
              Съемки фильма «Бажов. Одолженное время» на площадках МИЕ
            </h1>
            <span className={styles.date}>13.04.2024</span>
          </Layout>
          <Image alt='' src={BG} className={styles['banner-img']} />
        </div>
      </div>
      <div className={cx('main-wrapper', 'rounded')}>
        <Layout>
          <h2 className={cx('section-title')}>Покупка билета</h2>
          <CheckoutForm />
        </Layout>
      </div>
    </div>
  );
}
