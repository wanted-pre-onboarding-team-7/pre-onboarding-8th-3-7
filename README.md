# 파일구조

```
📦src
 ┣ 📂api
 ┃ ┗ 📜index.js
 ┣ 📂components
 ┃ ┣ 📂searchBar
 ┃ ┃ ┣ 📜SearchBar.module.css
 ┃ ┃ ┗ 📜SearchBar.tsx
 ┃ ┣ 📂searchResult
 ┃ ┃ ┣ 📜SearchResult.module.css
 ┃ ┃ ┗ 📜SearchResult.tsx
 ┃ ┗ 📜index.js
 ┣ 📂pages
 ┃ ┣ 📜Home.module.css
 ┃ ┗ 📜Home.tsx
 ┣ 📂store
 ┃ ┗ 📜index.js
 ┣ 📂utils
 ┃ ┣ 📜index.js
 ┃ ┗ 📜localStorage.js
 ┣ 📜App.module.css
 ┣ 📜App.tsx
 ┣ 📜declaration.d.ts
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┗ 📜react-app-env.d.ts
```

# Assignment1 ) 검색 기능 구현

## 검색한 키워드를 통해 추천 검색어를 사용자 Display

## 사용자가 입력한 텍스트와 일치하는 부분은 볼드처리

```js
{
  sickNm.split(searchValue).map((v, idx) =>
    idx + 1 !== sickNm.length ? (
      <>
        <span>{v}</span>
        <span className={styles.bold}>{searchValue}</span>
      </>
    ) : (
      <>
        <span>{v}</span>
      </>
    ),
  );
}
```

> 검색어 기준 split 후에 마지막을 제외하고 검색어를 뒤에 붙여서 처리

## 검색어가 없을 시 “검색어 없음”이 표출됩니다. (이때 추천 검색어는 보여지지 않습니다.)

```js
{
  isSearching && sickSearchs.length === 0 && <div>검색어 없음</div>;
}
```

## 추천 검색어 최대 7 개 표시

```js
export const getSearchSicks = async (query, pages = 10) => {
  const { data } = await axios.get(`${SICKHOST}?q=${query}`);
  console.info('calling api');
  return data.slice(0, pages);
};
```

> pages를 매개변수로 받아 7로 전달하여 7개만 Return

# Assignment2 ) 키보드만으로 추천 검색어들로 이동 가능

## 키보드만으로 추천 검색어들로 이동 가능하도록 구현

```js
const getFocusIdx = (searchFocusIdx: number): number => {
  const sickSearchsLength = sickSearchs.length;
  return searchFocusIdx >= 0
    ? searchFocusIdx % sickSearchsLength
    : (searchFocusIdx + sickSearchsLength) % sickSearchsLength;
};

const keyupFocusSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
  switch (e.key) {
    case 'ArrowUp':
      setSearchFocusIdx((idx) => getFocusIdx(idx - 1));
      break;
    case 'ArrowDown':
      setSearchFocusIdx((idx) => getFocusIdx(idx + 1));
      break;
    default:
  }
};
```

> 검색에 키보드 idx를 부여하여 해당 idx가 일치하는 부분 CSS 처리

# Assignment3 ) API 호출 최적화 A: API 호출별 로컬 캐싱 기능 구현

## 이미 검색했던 결과는 캐싱해서 불필요한 API호출을 방지

```js
const searchingSickData = async (inputValue: string) => {
  const localSickData = getItem('sick') || {};
  setIsSearching(true);
  setSearchValue(inputValue);
  if (localSickData[inputValue]) {
    setSickSearchs(inputValue !== '' ? localSickData[inputValue] : []);
  } else {
    const searchSicks = await getSearchSicks(inputValue, 7);
    setSickSearchs(searchSicks);
    addSickCacheData(localSickData, inputValue, searchSicks);
  }
};
```

> 이미 검색한 것은 로컬스토리지를 이용해 localSickData로 처리

# Assignment4 ) API 호출 최적화 B: 불필요한 API 요청이 가는 것을 방지

## 키워드 검색 시 debounce 기법을 이용해 불필요한 API 요청이 가는 것을 방지

```js
let timer: ReturnType<typeof setTimeout>;
const debounce = (e: React.ChangeEvent<HTMLInputElement>) => {
  const inputValue = e.target.value;
  timer && clearTimeout(timer);
  timer = setTimeout(() => {
    searchingSickData(inputValue);
  }, 500);
};
```

> debounce로 timer 갱신

## 검색어가 입력되는 동안 로딩을 알리는 UX를 구현합니다. (예정)

> Todos
