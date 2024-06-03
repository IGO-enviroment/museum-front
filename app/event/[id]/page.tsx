import { Metadata } from 'next';
import { EventPage } from 'pgs/event';
import { fetchEventById } from 'entities/event';

interface Props {
  params: { id: string };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const id = params.id;
  const data = await fetchEventById(id);

  if (data) {
    const { title, description, imageSrc } = data;
    return {
      title,
      description,
      openGraph: {
        title,
        images: [imageSrc],
      },
    };
  } else {
    return {};
  }
}

export default async function Event({ params: { id } }: Props) {
  const data = await fetchEventById(id);

  return <EventPage {...data} />;
}
