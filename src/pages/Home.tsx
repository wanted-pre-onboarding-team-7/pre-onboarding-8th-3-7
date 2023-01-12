import { useRef, useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import styles from './Home.module.css';

function Home() {
  const [keyword, setKeyword] = useState('');
  const [recommendKeyword, setRecommendKeyword] = useState([]);
  const [viewResult, setViewResult] = useState(false);

  const getRecommendKeyword = async (keyword: string) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/sick?q=${keyword}`,
      );
      console.log(response);
      console.info('calling api');
      setRecommendKeyword(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  //키이벤트용
  const [focusIdx, setFocusIdx] = useState(-1);
  const focusRef = useRef<HTMLUListElement>(null);

  const onKeyPressKeyword = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        console.log('아래');
        setFocusIdx((idx) => idx + 1);
        if (focusRef.current?.childElementCount === focusIdx + 1)
          setFocusIdx(0);
        break;
      case 'ArrowUp':
        console.log('위');
        if (focusIdx === -1) {
          return;
        }
        setFocusIdx((idx) => idx - 1);
        break;
    }
  };

  return (
    <div className={styles.container}>
      <span>국내 모든 임상시험 검색하고 온라인으로 참여하기</span>
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        //여기부터
        focusIdx={focusIdx}
        setFocusIdx={setFocusIdx}
        onKeyPressKeyword={onKeyPressKeyword}
        focusRef={focusRef}
        getRecommendKeyword={getRecommendKeyword}
        setViewResult={setViewResult}
      />
      {viewResult && (
        <SearchResult
          keyword={keyword}
          recommendKeyword={recommendKeyword}
          focusIdx={focusIdx}
          setFocusIdx={setFocusIdx}
          onKeyPressKeyword={onKeyPressKeyword}
          focusRef={focusRef}
        />
      )}
    </div>
  );
}

export default Home;
