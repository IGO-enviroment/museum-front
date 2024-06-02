import { client } from 'shared/api';
import { ClosestEvents } from 'entities/closest-events/api/types';

export async function fetchClosestEventsByDay(date?: string): Promise<ClosestEvents> {
  const { data } = await client.get('/closest-events', {
    params: {
      date,
    },
  });
  return data;
}
