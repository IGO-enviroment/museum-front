import type { Metadata } from 'next';
import { EventsPage } from 'pgs/events';

export const metadata: Metadata = {
  title: 'Поиск по событиям музея',
};

export default function Events() {
  /** Добавить склетную загрузку для страницы */
  return <EventsPage />;
}
