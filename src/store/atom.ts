import { atom } from 'recoil';

export const sickState = atom({
  key: 'SickState',
  default: [],
});

export const sickName = atom({
  key: 'SickName',
  default: '',
});
