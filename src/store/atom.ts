import { atom } from 'recoil';

export type IsInputFocus = boolean;
export type InputValue = string;

export const isInputFocusState = atom<IsInputFocus>({
  key: 'isInputFocusState',
  default: false,
});

export const inputValueState = atom<InputValue>({
  key: 'inputValueState',
  default: '',
});
