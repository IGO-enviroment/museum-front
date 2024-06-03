'use client';

import classNames from 'classnames/bind';
import { Layout } from 'shared/ui/layout';
import styles from './about-page.module.scss';
import BG from '../../../../../public/about/bg-about.jpeg';
import { NavCard } from 'pgs/about/ui/nav-card';
import { Grid } from 'shared/ui/grid';
import { useRouter } from 'next/navigation';
import { PageContainer } from 'shared/ui/page-container';

const cx = classNames.bind(styles);

const cards = [
  { title: 'Как подготовиться к походу в музей', link: '/preparation' },
  { title: 'В разработке...', link: '' },
  { title: 'В разработке...', link: '' },
  { title: 'В разработке...', link: '' },
];

export function AboutPage() {
  const { push } = useRouter();

  return (
    <PageContainer title='Музей истории Екатеринбурга. Информация' imageSrc={BG}>
      <Layout>
        <h2 className={cx('section-title')}>Навигация</h2>
        <Grid className={cx('nav-cards')}>
          {cards.map(({ title, link }, i) => (
            <NavCard key={i} onClick={() => push(link)} className={cx('nav-card')} title={title} />
          ))}
        </Grid>
      </Layout>
    </PageContainer>
  );
}
