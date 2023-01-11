import styles from './Home.module.css';
import SearchBar from '../components/searchBar/SearchBar';
import SearchResult from '../components/searchResult/SearchResult';
import {
  InputValue,
  inputValueState,
  IsInputFocus,
  isInputFocusState,
} from '../store/atom';
import { useRecoilValue } from 'recoil';

function Home() {
  const isInputFocus = useRecoilValue<IsInputFocus>(isInputFocusState);
  const inputValue = useRecoilValue<InputValue>(inputValueState);

  console.log('home', inputValue);
  return (
    <div className={styles.container}>
      <span className={styles.title}>국내 모든 임상시험 검색하고</span>
      <span className={styles.title}>온라인으로 참여하기</span>
      <SearchBar />
      {isInputFocus && <SearchResult />}
    </div>
  );
}

export default Home;
