import { useState, useEffect } from "react";
import useSearch from "../hooks/useSearch";
import { fetchFolders, fetchLinks } from "../component/Folder/fetchData";
import { ALL } from "../utils/utils";
import { folderDataType, linksType } from "../interfaces/folder.interface";
import Footer from "../component/Footer/Footer";
import Navigation from "../component/common/Navigation";
import InputSection from "../component/Folder/InputSection";
import SearchBar from "../component/common/SearchBar";
import FolderToolBar from "../component/Folder/FolderToolBar";
import * as S from "./page.styled";

const Folder = () => {
  const [folderData, setFolderData] = useState<folderDataType[]>([]);
  const [links, setLinks] = useState<linksType[]>([]);
  const [selectedButtonName, setSelectedButtonName] = useState(ALL);

  const { setSearchKeyword, filteredItems } = useSearch(links, [
    "url",
    "title",
    "description",
  ]);

  useEffect(() => {
    fetchFolders().then(setFolderData).catch(console.error);
    fetchLinks().then(setLinks).catch(console.error);
  }, []);

  const onFolderSelect = (folderId: string | number) => {
    if (folderId === ALL) {
      setSelectedButtonName(ALL);
      fetchLinks().then(setLinks).catch(console.error);
    } else {
      const result = folderData.find((folder) => folder.id === folderId);
      const folderName = result ? result.name : ALL;
      setSelectedButtonName(folderName);
      fetchLinks(folderId).then(setLinks).catch(console.error);
    }
  };

  return (
    <>
      <Navigation position="static" />
      <S.MainSection>
        <InputSection folderData={folderData} />
        <S.MainWrapper>
          <SearchBar onSearch={setSearchKeyword} />
          <FolderToolBar
            folderData={folderData}
            filteredItems={filteredItems}
            selectedButtonName={selectedButtonName}
            onFolderSelect={onFolderSelect}
          />
        </S.MainWrapper>
        <Footer />
      </S.MainSection>
    </>
  );
};

export default Folder;
