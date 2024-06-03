import { client } from 'shared/api';
import { Event } from './type';

export async function fetchEventById(id?: string): Promise<Event> {
  const { data } = await client.get('/testevent', {
    params: {
      id,
    },
  });

  return data;
}
