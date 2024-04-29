import styles from './page.module.scss';
import type { Metadata } from 'next';
import BG from '../../public/afisha/i.webp';
import Image from 'next/image';
import { Layout } from 'shared/ui/layout';

export const metadata: Metadata = {
  title: 'Museum',
};

const title = 'Афиша событий';
const subtitle = 'в музее истории Екатеринбурга';

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles['main-banner']}>
        <Layout>
          <h1 className={styles.title}>
            {title}
            <br />
            <span className={styles.subtitle}>{subtitle}</span>
          </h1>
        </Layout>
        <Image alt='' src={BG} className={styles['banner-img']} />
      </div>
      <div className={styles['main-wrapper']}>
        <Layout>12345</Layout>
      </div>
    </div>
  );
}
