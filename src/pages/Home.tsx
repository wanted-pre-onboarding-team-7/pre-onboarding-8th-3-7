import { useState } from 'react';
import axios from 'axios';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import styles from './Home.module.css';

function Home() {
  const [keyword, setKeyword] = useState('');
  const [recommendKeyword, setRecommendKeyword] = useState([]);

  let timer: any;

  const debounce = () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      if (keyword) {
        const getRecommendKeyword = async (keyword: string) => {
          try {
            const response = await axios.get(
              `http://localhost:4000/sick?q=${keyword}`,
            );
            console.log(response);
            console.info('calling api');
            setRecommendKeyword(response.data);
            //   return response.data;
          } catch (err) {
            console.error(err);
          }
        };
        getRecommendKeyword(keyword);
      }
    }, 700);
  };

  return (
    <div className={styles.container}>
      <span>국내 모든 임상시험 검색하고 온라인으로 참여하기</span>
      <SearchBar
        keyword={keyword}
        setKeyword={setKeyword}
        debounce={debounce}
      />
      <SearchResult keyword={keyword} recommendKeyword={recommendKeyword} />
    </div>
  );
}

export default Home;
