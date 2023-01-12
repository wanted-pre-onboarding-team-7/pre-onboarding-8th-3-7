export interface IApi {
  sickNm: string;
  sickCd: string;
}

export interface IKeywords {
  keyword: string;
  setKeyword?: React.Dispatch<React.SetStateAction<string>>;
  focusIdx: number;
  setFocusIdx: React.Dispatch<React.SetStateAction<number>>;
  onKeyPressKeyword: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  focusRef: React.RefObject<HTMLUListElement>;
  getRecommendKeyword?: (keyword: string) => void;
  setViewResult?: React.Dispatch<React.SetStateAction<boolean>>;
  recommendKeyword?: IApi[];
}
