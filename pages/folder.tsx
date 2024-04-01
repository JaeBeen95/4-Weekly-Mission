import { useState, useEffect } from "react";
import useSearch from "../hooks/useSearch";
import { fetchFolders, fetchLinks } from "../components/Folder/fetchData";
import { folderDataType, linksType } from "../types/folder.interface";
import { ALL } from "../utils/utils";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/common/Navigation";
import InputSection from "../components/Folder/InputSection";
import SearchBar from "../components/common/SearchBar";
import FolderToolBar from "../components/Folder/FolderToolBar";
import styles from "../styles/page.module.css";

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

  const onFolderSelect = (folderId: typeof ALL | number) => {
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
      <section className={styles.mainSection}>
        <InputSection folderData={folderData} />
        <div className={styles.mainWrapper}>
          <SearchBar onSearch={setSearchKeyword} />
          <FolderToolBar
            folderData={folderData}
            filteredItems={filteredItems}
            selectedButtonName={selectedButtonName}
            onFolderSelect={onFolderSelect}
          />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Folder;
