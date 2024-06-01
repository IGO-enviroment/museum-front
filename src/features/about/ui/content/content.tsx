'use client';

import classNames from 'classnames/bind';
import { Layout } from 'shared/ui/layout';
import Image from 'next/image';
import { useRef } from 'react';
import styles from './content.module.scss';
import BG from '../../../../../public/about/bg-about.jpeg';
import { NavCard } from 'features/about/ui/nav-card';
import { Grid } from 'shared/ui/grid';

const cx = classNames.bind(styles);

export function AboutContent() {
  const bannerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.root}>
      <div className={styles['main-banner-wrapper']}>
        <div ref={bannerRef} className={styles['main-banner']}>
          <Layout>
            <h1 className={styles.title}>Музей истории Екатеринбурга. Информация</h1>
          </Layout>
          <Image alt='' src={BG} className={styles['banner-img']} />
        </div>
      </div>
      <div className={cx('main-wrapper', 'rounded')}>
        <Layout>
          <h2 className={cx('section-title')}>Навигация</h2>
          <Grid className={cx('nav-cards')}>
            {Array.from({ length: 4 }).map((_, i) => (
              <NavCard className={cx('nav-card')} key={i} title='Билеты  по Пушкинской карте' />
            ))}
          </Grid>
        </Layout>
      </div>
    </div>
  );
}
