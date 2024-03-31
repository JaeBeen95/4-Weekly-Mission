import { searchBarProps } from "../../types/folder.interface";
import searchImg from "../../public/icons/search.svg";
import Image from "next/image";
import styles from "./SearchBar.module.css";

const SearchBar = ({ onSearch }: searchBarProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };
  return (
    <div className={styles.searchBar}>
      <input
        className={styles.input}
        type="search"
        placeholder="링크를 검색해 보세요."
        onChange={handleSearch}
      />
      <Image className={styles.icon} src={searchImg} alt="돋보기 아이콘" />
    </div>
  );
};

export default SearchBar;
