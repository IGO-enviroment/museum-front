import { Metadata } from 'next';
import { Event as EventCard } from 'widget/event';

export const metadata: Metadata = {
  title: 'Название события',
};

export default function Event({ params }: { params: { 'event-id': string } }) {
  return <EventCard params={params} />;
}
