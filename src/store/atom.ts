import { atom } from 'recoil';

export const isInputFocus = atom<boolean>({
  key: 'isInputFocus',
  default: false,
});

export const inputRefState = atom<string>({
  key: 'inputRefState',
  default: '',
});
