import { StateCreator } from 'zustand';
import { Filters } from '../types';
import { FiltersData } from './__fixtures__';

type State = {
  filters: Filters.Filter.Item[];
};

type Actions = {
  changeFilter: (name: Filters.Filter.Item['name'], value?: any[]) => void;
  resetAll: () => void;
};
export type FiltersSlice = State & Actions;

const initialState: State = {
  filters: FiltersData,
};

export const FILTER_TYPES = {
  SELECT: 'select',
  MULTI_SELECT: 'multiple-select',
  RANGE: 'range',
  CALENDAR: 'calendar',
  TOGGLE: 'toggle',
};

const generateFilters = (filters: Filters.Filter.Item[], filter: Filters.Filter.Item) => {
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
const changeSelectFilter = (filter: Filters.Filter.Item, selectedIds: number[]) => {
  return {
    ...filter,
    value: filter.value?.map(option => ({
      ...option,
      isSelected: Boolean(option.id && selectedIds.includes(option.id)),
    })),
  };
};

const changeCalendarFilter = (filter: Filters.Filter.Item, value: [string, string]) => {
  return {
    ...filter,
    value,
  };
};

const changeToggleFilter = (filter: Filters.Filter.Item) => {
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

const changeRangeFilter = (filter: Filters.Filter.Item, data: [from: number, to: number]) => {
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

const changeFilterByType: Record<any, any> = {
  [FILTER_TYPES.SELECT]: changeSelectFilter,
  [FILTER_TYPES.CALENDAR]: changeCalendarFilter,
  [FILTER_TYPES.TOGGLE]: changeToggleFilter,
  [FILTER_TYPES.RANGE]: changeRangeFilter,
};

export const createFiltersSlice: StateCreator<FiltersSlice> = (set, get) => ({
  ...initialState,
  resetAll: () => {
    const result = get().filters.map(filter => {
      // @todo вынести в resetByType.
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

    set(state => ({
      filters: result,
    }));
  },
  changeFilter: (filterName, value) => {
    const { filters } = get();

    const changedFilter = filters.find(filter => filter.name === filterName);

    if (!changedFilter) {
      return;
    }

    const changer = changeFilterByType[changedFilter.type];

    const resultFilter = changer(changedFilter, value);

    const result = generateFilters(filters, resultFilter);

    set(state => ({
      filters: result,
    }));

    console.log(result);
  },
});
