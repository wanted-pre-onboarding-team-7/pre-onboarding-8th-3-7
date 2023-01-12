import { atom } from 'recoil';

export type InputValue = string;

export interface KeyboardState {
  index: number;
  isSelected: boolean;
}
export const initialKeyboardState: KeyboardState = {
  index: 0,
  isSelected: false,
};

export const inputValueState = atom<InputValue>({
  key: 'inputValueState',
  default: '',
});

export const keyboardState = atom<KeyboardState>({
  key: 'keyboardState',
  default: initialKeyboardState,
});
