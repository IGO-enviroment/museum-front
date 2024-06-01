import { Events, Filters } from 'features/events/types';

export const TempItems = [
  {
    name: 'Название мероприятия #1',
  },
  {
    name: 'Название мероприятия #2',
  },
  {
    name: 'Название мероприятия #3',
  },
  {
    name: 'Название мероприятия #4',
  },
] as unknown as Events.Item[];

export const FiltersData: Filters.Filter.Item[] = [
  {
    name: 'event_activity',
    type: 'select',
    title: 'Тип мероприятия',
    value: [
      {
        id: 1,
        name: 'Интерактив',
        isSelected: true,
      },
      {
        id: 2,
        name: 'Спектакль',
        isSelected: false,
      },
      {
        id: 3,
        name: 'Лекция',
        isSelected: true,
      },
    ],
  },
  {
    name: 'age_limit',
    type: 'select',
    title: 'Возрастное ограничение',
    value: [
      {
        id: 1,
        name: '12+',
        isSelected: false,
      },
      {
        id: 2,
        name: '16+',
        isSelected: false,
      },
      {
        id: 3,
        name: '18+',
        isSelected: false,
      },
    ],
  },
  {
    name: 'date',
    title: 'Дата',
    type: 'calendar',
    value: ['', ''],
  },
  {
    name: 'price',
    type: 'range',
    title: 'Стоимость билетов',
    value: [
      {
        from: 1200,
        to: 1300,
        min: 100,
        max: 1500,
      },
    ],
  },
  {
    name: 'tickets',
    type: 'range',
    title: 'Количество билетов',
    value: [
      {
        from: 7,
        to: 15,
        min: 0,
        max: 38,
      },
    ],
  },
];
