import { ALL } from "../../utils/utils";
import { folderToolBarProps } from "../../types/folder.interface";
import styles from "./FolderButton.module.css";

const FolderButton = ({
  folderData,
  onFolderSelect,
  selectedButtonName,
}: folderToolBarProps) => {
  return (
    <div className={styles.FolderButtonWrapper}>
      <button
        className={styles.FolderButton}
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
          className={styles.FolderButton}
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
