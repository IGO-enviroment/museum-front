import { Event } from 'shared/types';

export interface ClosestEvents {
  month: string;
  dates: Array<{ value: string; isActive?: boolean }>;
  events: Array<Event>;
}
