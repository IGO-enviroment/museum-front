'use client';

import classNames from 'classnames/bind';
import { Layout } from 'shared/ui/layout';
import Image from 'next/image';
import styles from './content.module.scss';
import BG from '../../../../../public/about/bg-about.jpeg';
import { NavCard } from 'features/about/ui/nav-card';
import { Grid } from 'shared/ui/grid';
import { useRouter } from 'next/navigation';

const cx = classNames.bind(styles);

const cards = [
  { title: 'Как подготовиться к походу в музей', link: '/preparation' },
  { title: 'В разработке...', link: '' },
  { title: 'В разработке...', link: '' },
  { title: 'В разработке...', link: '' },
];

export function AboutContent() {
  const { push } = useRouter();
  return (
    <div className={styles.root}>
      <div className={styles['main-banner-wrapper']}>
        <div className={styles['main-banner']}>
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
            {cards.map(({ title, link }, i) => (
              <NavCard
                key={i}
                onClick={() => push(link)}
                className={cx('nav-card')}
                title={title}
              />
            ))}
          </Grid>
        </Layout>
      </div>
    </div>
  );
}
