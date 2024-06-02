import { MainContent } from 'features/afisha';
import { Metadata } from 'next';
import { getPopularEvents } from 'entities/popular-events/api';

export const metadata: Metadata = {
  title: 'Афиша',
};

export default async function Home() {
  const popularEvents = await getPopularEvents();
  return <MainContent initialPopularEvents={popularEvents} />;
}
