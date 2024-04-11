import { Filters as IFilter, Filters } from 'features/events/types';
import { create } from 'zustand';

export type FiltersState = {
  filters: Filters.Filter.Item[];
  page: number | null;
};

const FiltersData: IFilter.Filter.Item[] = [
  {
    name: 'Фильтр #1',
    values: [
      {
        id: 1,
        name: 'Опция #1',
        isSelected: true,
      },
      {
        id: 2,
        name: 'Опция #2',
        isSelected: true,
      },
      {
        id: 3,
        name: 'Опция #3',
        isSelected: false,
      },
    ],
  },
];

export type FiltersActions = {
  changeFilter: (name: Filters.Filter.Item['name'], values: number[]) => void;
};

export const useFiltersStore = create<FiltersState & FiltersActions>((set, getState) => ({
  filters: FiltersData,
  page: null,
  changeFilter: (filterName, values) => {
    const { filters } = getState();
    const result = filters.map(filter => {
      if (filterName !== filter.name) {
        return filter;
      } else {
        return {
          ...filter,
          values: filter.values.map(option => ({
            ...option,
            isSelected: values.includes(option.id),
          })),
        };
      }
    });
    set({ filters: result });
  },
}));
