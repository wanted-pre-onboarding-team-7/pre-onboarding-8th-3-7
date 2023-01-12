import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { IRecommendedList } from '../\btypes';

const { persistAtom } = recoilPersist({
  key: 'cacheSickList',
  storage: localStorage,
});

export const stateSickListHistory = atom({
  key: 'listHistory',
  default: [] as IRecommendedList[],
  effects: [persistAtom],
});

export const stateGetSearch = atom({
  key: 'GetSearch',
  default: [] as IRecommendedList[],
});

export const isInputFocus = atom({
  key: 'isInputFocus',
  default: false,
});

export const selectFocus = atom({
  key: 'selectFocus',
  default: -1,
});

export const Searcheyword = atom({
  key: 'Searcheyword',
  default: '',
});

export const stateIsLoading = atom({
  key: 'isLoading',
  default: false,
});
