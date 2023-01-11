import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import styles from './Home.module.css';

function Home() {
  const [keyword, setKeyword] = useState('');
  const [recommendKeyword, setRecommendKeyword] = useState([]);

  useEffect(() => {
    if (keyword) {
      const getRecommendKeyword = async (keyword: string) => {
        try {
          const response = await axios.get(
            `http://localhost:4000/sick?q=${keyword}`,
          );
          console.log(response);
          setRecommendKeyword(response.data);
          //   return response.data;
        } catch (err) {
          console.error(err);
        }
      };
      getRecommendKeyword(keyword);
    }
  }, [keyword]);

  return (
    <div className={styles.container}>
      <span>국내 모든 임상시험 검색하고 온라인으로 참여하기</span>
      <SearchBar keyword={keyword} setKeyword={setKeyword} />
      <SearchResult keyword={keyword} recommendKeyword={recommendKeyword} />
    </div>
  );
}

export default Home;
