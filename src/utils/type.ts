import React from 'react';

export interface Result {
  sickCd: string;
  sickNm: string;
  bold?: string;
  notBold?: Array<string>;
}
export interface ResultPainted {
  sickCd: string;
  sickNm: string;
  bold: string;
  notBold: Array<string>;
}

export type IsInputFocus = boolean;

export interface ISearchBar {
  setIsInputFocus: React.Dispatch<React.SetStateAction<IsInputFocus>>;
}

export interface IResultItem {
  result: ResultPainted;
  index: number;
}
