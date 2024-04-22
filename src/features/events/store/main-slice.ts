import { StateCreator } from 'zustand';
import { Events, Page } from 'features/events/types';
import { TempItems } from 'features/events/store/__fixtures__';

type State = {
  events: Array<Events.Item>;
  page: Page;
};

type Actions = {
  changePage: (page: number) => void;
};

const initialState: State = {
  events: TempItems,
  page: {
    current: 1,
    total: 50,
  },
};

export type MainSlice = State & Actions;

export const createMainSlice: StateCreator<MainSlice> = (set, get, store) => ({
  ...initialState,
  changePage: value => {
    set(() => ({ page: { ...get().page, current: value } }));
  },
});
