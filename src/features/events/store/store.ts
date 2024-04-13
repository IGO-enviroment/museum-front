import { Filters as IFilter, Filters } from 'features/events/types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

export type FiltersState = {
  filters: Filters.Filter.Item[];
  page: number | null;
};

const FILTER_TYPES = {
  SELECT: 'select',
  MULTI_SELECT: 'multi-select',
  RANGE: 'range',
  CALENDAR: 'calendar',
};

const FiltersData: IFilter.Filter.Item[] = [
  {
    name: 'event_activity',
    type: 'select',
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
    name: 'rating',
    type: 'select',
    value: [
      {
        id: 0,
        name: '0',
        isSelected: false,
      },
      {
        id: 1,
        name: '1',
        isSelected: false,
      },
      {
        id: 2,
        name: '2',
        isSelected: false,
      },
      {
        id: 3,
        name: '3',
        isSelected: false,
      },
      {
        id: 4,
        name: '4',
        isSelected: false,
      },
      {
        id: 5,
        name: '5',
        isSelected: false,
      },
    ],
  },
  {
    name: 'date',
    type: 'calendar',
    value: ['', ''],
  },
];

const initialState: FiltersState = {
  filters: FiltersData,
  page: null,
};

export type FiltersActions = {
  changeFilter: (name: Filters.Filter.Item['name'], value: any[]) => void;
};

const generateFilters = (
  filters: IFilter.Filter.Item[],
  filterName: string,
  filterValue: any[],
) => {
  return filters.map(filterItem => {
    if (filterItem.name !== filterName) {
      return filterItem;
    } else {
      return {
        ...filterItem,
        value: filterValue,
      };
    }
  });
};

/**
 * Возвращает id текущего.
 * @param filters текущие фильтры.
 * @param filter текущий select фильтр.
 * @param selectedIds выбранные идентификаторы.
 */
const changeSelectFilter = (
  filters: IFilter.Filter.Item[],
  filter: IFilter.Filter.Item,
  selectedIds: number[],
) => {
  return filters.map(filterItem => {
    if (filterItem.name !== filter.name) {
      return filterItem;
    } else {
      return {
        ...filterItem,
        value: filterItem.value?.map(option => ({
          ...option,
          isSelected: Boolean(option.id && selectedIds.includes(option.id)),
        })),
      };
    }
  });
};

const changeCalendarFilter = (
  filters: IFilter.Filter.Item[],
  filter: IFilter.Filter.Item,
  value: [string, string],
) => {
  return filters.map(filterItem => {
    if (filterItem.name !== filter.name) {
      return filterItem;
    } else {
      return {
        ...filterItem,
        value,
      };
    }
  });
};

const changeFilterByType = {
  [FILTER_TYPES.SELECT]: changeSelectFilter,
  [FILTER_TYPES.CALENDAR]: changeCalendarFilter,
};

export const useFiltersStore = create<FiltersState & FiltersActions>()(
  devtools(
    immer((set, getState) => ({
      ...initialState,
      changeFilter: (filterName, value) => {
        const { filters } = getState();
        const changedFilter = filters.find(filter => filter.name === filterName);

        if (!changedFilter) {
          return;
        }

        const changer = changeFilterByType[changedFilter.type];

        const result = changer(filters, changedFilter, value);

        set(state => {
          state.filters = result;
        });

        console.log(result);
      },
    })),
  ),
);
