import { searchBarProps } from "../../interfaces/folder.interface";
import styled from "styled-components";
import searchImg from "../../assets/icons/search.svg";

const SearchBar = ({ onSearch }: searchBarProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    onSearch(searchTerm);
  };

  return (
    <S.SearchBar>
      <S.Input
        type="search"
        placeholder="링크를 검색해 보세요."
        onChange={handleSearch}
      />
      <S.Icon src={searchImg} alt="돋보기 아이콘" />
    </S.SearchBar>
  );
};

const S = {
  SearchBar: styled.div`
    position: relative;
    width: 100%;
  `,

  Input: styled.input`
    width: 100%;
    max-width: 106rem;
    height: 4.3rem;
    padding-left: 3.8rem;
    padding-right: 1.6rem;
    border-radius: 1rem;
    background-color: var(--gray5);
    font-size: 1.4rem;

    @media (min-width: 768px) {
      height: 5.4rem;
      padding-left: 4.2rem;
      font-size: 1.6rem;
      line-height: 150%;
    }

    &::placeholder {
      color: var(--gray80);
    }
  `,

  Icon: styled.img`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 1.6rem;
  `,
};

export default SearchBar;
