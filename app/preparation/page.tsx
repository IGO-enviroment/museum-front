import type { Metadata } from 'next';
import { Preparation } from 'pages/preparation';

export const metadata: Metadata = {
  title: 'Подготовка к походу в музей',
};

export default function Events() {
  /** Добавить склетную загрузку для страницы */
  return <Preparation />;
}
