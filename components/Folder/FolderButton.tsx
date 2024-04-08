import { ALL } from "../../utils/utils";
import { FolderToolBarProps } from "../../types/folder.type";
import styles from "./FolderButton.module.css";

const FolderButton = ({
  folderData,
  onFolderSelect,
  selectedButtonName,
}: FolderToolBarProps) => {
  return (
    <div className={styles.folderButtonWrapper}>
      <button
        className={styles.folderButton}
        data-selected={selectedButtonName === ALL}
        onClick={() => {
          onFolderSelect?.(ALL);
        }}
      >
        <span>{ALL}</span>
      </button>
      {folderData.map(({ id, name }) => (
        <button
          key={id}
          className={styles.folderButton}
          data-selected={selectedButtonName === name}
          onClick={() => {
            onFolderSelect && onFolderSelect(id, name);
          }}
        >
          <span>{name}</span>
        </button>
      ))}
    </div>
  );
};

export default FolderButton;
