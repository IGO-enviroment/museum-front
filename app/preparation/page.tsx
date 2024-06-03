import type { Metadata } from 'next';
import { PreparationPage } from 'pgs/preparation';

export const metadata: Metadata = {
  title: 'Подготовка к походу в музей',
};

export default function Preparation() {
  return <PreparationPage />;
}
