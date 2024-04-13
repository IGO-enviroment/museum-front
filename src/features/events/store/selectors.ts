import { FILTER_TYPES, FiltersState } from 'features/events/store/store';

const filters = (state: FiltersState) => state.filters;

const selectedValues = (state: FiltersState) =>
  filters(state).reduce(
    (acc, filter) => {
      switch (filter.type) {
        case FILTER_TYPES.SELECT:
        case FILTER_TYPES.MULTI_SELECT:
        case FILTER_TYPES.TOGGLE: {
          const selected = filter.value.filter(value => value.isSelected).map(value => value.id);
          return selected.length
            ? {
                ...acc,
                [filter.name]: filter.value
                  .filter(value => value.isSelected)
                  .map(value => value.id),
              }
            : acc;
        }
        case FILTER_TYPES.CALENDAR: {
          const hasValue = filter.value.some(Boolean);
          return hasValue ? { ...acc, [filter.name]: filter.value } : acc;
        }
        case FILTER_TYPES.RANGE: {
          const filterValue = filter.value[0];
          if (filterValue.from !== filterValue.min || filterValue.to !== filterValue.max) {
            return { ...acc, [filter.name]: [filterValue.from, filterValue.to] };
          } else {
            return acc;
          }
        }
        default: {
          return acc;
        }
      }
    },
    {} as Record<string, any[]>,
  );

const hasSelectedFilters = (state: FiltersState) =>
  Boolean(Object.keys(selectedValues(state)).length);

export const selectors = {
  filters,
  selectedValues,
  hasSelectedFilters,
};
