import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { createFiltersSlice, FiltersSlice } from './filters-slice';
import { createSearchSlice, SearchSlice } from 'pgs/events/model/store/search-slice';
import { createMainSlice, MainSlice } from 'pgs/events/model/store/main-slice';

export type FiltersStore = FiltersSlice;

export const useEventsStore = create<MainSlice & FiltersSlice & SearchSlice>()(
  immer((...data) => ({
    ...createMainSlice(...data),
    ...createFiltersSlice(...data),
    ...createSearchSlice(...data),
  })),
);
