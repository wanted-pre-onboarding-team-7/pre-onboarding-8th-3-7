import { atom } from 'recoil';

export const sickState = atom({
  key: 'SickState',
  default: [],
});

export const sickName = atom({
  key: 'SickName',
  default: '',
});

export const focusIndex = atom({
  key: 'FocusIndex',
  default: -1,
});
