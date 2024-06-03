import { Metadata } from 'next';
import { getPopularEvents } from 'entities/popular-events/api';
import { AfishaPage } from 'pgs/afisha';

export const metadata: Metadata = {
  title: 'Афиша',
};

export default async function () {
  const popularEvents = await getPopularEvents();

  return <AfishaPage initialPopularEvents={popularEvents} />;
}
