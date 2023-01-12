import { atom } from 'recoil';
import { IRecommendedList } from '../\btypes';

export const stateGetSearch = atom({
  key: 'searchRecommended',
  default: [] as IRecommendedList[],
});

export const isInputFocus = atom({
  key: 'isInputFocus',
  default: false,
});

export const Searcheyword = atom({
  key: 'Searcheyword',
  default: '',
});

export const stateIsLoading = atom({
  key: 'isLoading',
  default: false,
});
