import { Filters as IFilter, Filters } from 'features/events/types';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';

export type FiltersState = {
  filters: Filters.Filter.Item[];
  page: number | null;
};

// @todo в enum
export const FILTER_TYPES = {
  SELECT: 'select',
  MULTI_SELECT: 'multi-select',
  RANGE: 'range',
  CALENDAR: 'calendar',
  TOGGLE: 'toggle',
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
    name: 'age_limit',
    type: 'select',
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
    type: 'calendar',
    value: ['', ''],
  },
  {
    name: 'price',
    type: 'range',
    title: 'Цена',
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
    name: 'sort_by_popularity',
    type: 'toggle',
    title: 'Сортировать по популярности',
    value: [
      {
        id: 0,
        isSelected: false,
      },
    ],
  },
];

const initialState: FiltersState = {
  filters: FiltersData,
  // @todo вынести из фильтров (мб со списком мероприятий отправлять) ?
  page: null,
};

export type FiltersActions = {
  changeFilter: (name: Filters.Filter.Item['name'], value?: any[]) => void;
  resetAll: () => void;
};

const generateFilters = (filters: IFilter.Filter.Item[], filter: IFilter.Filter.Item) => {
  return filters.map(filterItem => {
    if (filterItem.name !== filter.name) {
      return filterItem;
    } else {
      return {
        ...filterItem,
        value: filter.value,
      };
    }
  });
};

/**
 * Возвращает id текущего.
 * @param filter текущий select фильтр.
 * @param selectedIds выбранные идентификаторы.
 */
const changeSelectFilter = (filter: IFilter.Filter.Item, selectedIds: number[]) => {
  return {
    ...filter,
    value: filter.value?.map(option => ({
      ...option,
      isSelected: Boolean(option.id && selectedIds.includes(option.id)),
    })),
  };
};

const changeCalendarFilter = (filter: IFilter.Filter.Item, value: [string, string]) => {
  return {
    ...filter,
    value,
  };
};

const changeToggleFilter = (filter: IFilter.Filter.Item) => {
  return {
    ...filter,
    value: [
      {
        ...filter.value[0],
        isSelected: !filter.value[0]?.isSelected,
      },
    ],
  };
};

const changeRangeFilter = (filter: IFilter.Filter.Item, data: [from: number, to: number]) => {
  return {
    ...filter,
    value: [
      {
        ...filter.value[0],
        from: data[0],
        to: data[1],
      },
    ],
  };
};

const changeFilterByType = {
  [FILTER_TYPES.SELECT]: changeSelectFilter,
  [FILTER_TYPES.CALENDAR]: changeCalendarFilter,
  [FILTER_TYPES.TOGGLE]: changeToggleFilter,
  [FILTER_TYPES.RANGE]: changeRangeFilter,
};

export const useFiltersStore = create<FiltersState & FiltersActions>()(
  immer((set, get) => ({
    ...initialState,
    resetAll: () => {
      const result = get().filters.map(filter => {
        switch (filter.type) {
          case FILTER_TYPES.SELECT:
          case FILTER_TYPES.MULTI_SELECT:
          case FILTER_TYPES.TOGGLE:
            return {
              ...filter,
              value: filter.value.map(value => ({ ...value, isSelected: false })),
            };
          //@todo тоже засунуть под range
          case FILTER_TYPES.CALENDAR:
            return {
              ...filter,
              value: ['', ''],
            };
          case FILTER_TYPES.RANGE:
            return {
              ...filter,
              value: [
                {
                  ...filter.value[0],
                  from: filter.value[0].min,
                  to: filter.value[0].max,
                },
              ],
            };
          default:
            return filter;
        }
      });

      set(state => {
        state.filters = result;
      });
    },
    changeFilter: (filterName, value) => {
      const { filters } = get();

      const changedFilter = filters.find(filter => filter.name === filterName);

      if (!changedFilter) {
        return;
      }

      const changer = changeFilterByType[changedFilter.type] as any;

      const resultFilter = changer(changedFilter, value);

      const result = generateFilters(filters, resultFilter);

      set(state => {
        state.filters = result;
      });

      console.log(result);
    },
  })),
);
