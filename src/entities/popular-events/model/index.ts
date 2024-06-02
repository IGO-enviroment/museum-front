import { useQuery } from '@tanstack/react-query';
import { getPopularEvents } from 'entities/popular-events/api';

export const usePopularEvents = (initialData?: PopularEvent[]) =>
  useQuery({
    queryKey: ['popular-events'],
    queryFn: () => getPopularEvents(),
    select: data => data || [],
    initialData,
  });
