import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { fetchClosestEventsByDay } from 'entities/closest-events';
import { useState } from 'react';

export const useClosestEvents = () => {
  const [date, setDate] = useState<undefined | string>(undefined);

  const query = useQuery({
    queryKey: ['closest-events', date],
    queryFn: () => fetchClosestEventsByDay(date),
    placeholderData: keepPreviousData,
  });

  return {
    setDate,
    query,
  };
};
