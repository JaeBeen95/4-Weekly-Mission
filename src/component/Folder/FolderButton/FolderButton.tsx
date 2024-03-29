import { ALL } from "../../../utils/utils";
import { folderToolBarProps } from "../../../interfaces/folder.interface";
import "./FolderButton.css";
import classNames from "classnames";

const FolderButton = ({
  folderData,
  onFolderSelect,
  selectedButtonName,
}: folderToolBarProps) => {
  return (
    <>
      <button
        className={classNames(
          "folder-button",
          selectedButtonName === ALL && "selected"
        )}
        onClick={() => {
          onFolderSelect?.(ALL);
        }}
      >
        <span>{ALL}</span>
      </button>
      {folderData.map(({ id, name }) => (
        <button
          key={id}
          className={classNames(
            "folder-button",
            selectedButtonName === name && "selected"
          )}
          onClick={() => {
            onFolderSelect && onFolderSelect(id, name);
          }}
        >
          <span>{name}</span>
        </button>
      ))}
    </>
  );
};
export default FolderButton;
