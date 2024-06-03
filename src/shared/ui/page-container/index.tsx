import { ReactNode } from 'react';
import styles from './page-container.module.scss';
import classNames from 'classnames/bind';
import { Layout } from 'shared/ui/layout';
import Image, { StaticImageData } from 'next/image';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  description?: string;
  imageSrc: string | StaticImageData;
  children: ReactNode;
}

export const PageContainer = ({ title, imageSrc, children }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles['main-banner-wrapper']}>
        <div className={styles['main-banner']}>
          <Layout>
            <h1 className={styles.title}>{title}</h1>
          </Layout>
          <Image alt='' src={imageSrc} className={styles['banner-img']} />
        </div>
      </div>
      <div className={cx('main-wrapper', 'rounded')}>{children}</div>
    </div>
  );
};
