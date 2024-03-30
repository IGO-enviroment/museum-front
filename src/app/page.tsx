import styles from './page.module.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Museum',
};

export default function Home() {
  return <div className={styles.root}>ЗДЕСЬ БУДЕТ САЙТ</div>;
}
