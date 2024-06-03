import { StateCreator } from 'zustand';

type SearchBy = 'title' | 'description';

type State = {
  searchValue: string;
  searchBy: SearchBy;
};

type Actions = {
  onSearchChange: (value?: string) => void;
  onSearchByChange: (value: SearchBy) => void;
};

export type SearchSlice = State & Actions;

const initialState: State = {
  searchValue: '',
  searchBy: 'title',
};

export const createSearchSlice: StateCreator<SearchSlice> = (set, get) => ({
  ...initialState,
  onSearchChange: value => {
    set({ searchValue: value });
  },
  onSearchByChange: value => {
    set({ searchBy: value });
  },
});
