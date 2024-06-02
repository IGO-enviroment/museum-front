import { client } from 'shared/api';

export async function getPopularEvents(): Promise<PopularEvent[]> {
  try {
    const { data: popularEvents } = await client.get('/popular');
    return popularEvents;
  } catch (error) {
    return undefined;
  }
}
