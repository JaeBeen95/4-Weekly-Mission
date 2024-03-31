import useModal from "../../hooks/useModal";
import FolderButton from "./FolderButton";
import FolderCardList from "./FolderCardList";
import ModalEdit from "../Modal/ModalEdit";
import ModalShare from "../Modal/ModalShare";
import ModalDelete from "../Modal/ModalDelete";
import { ALL } from "../../utils/utils";
import {
  folderToolBarProps,
  handleModalType,
} from "../../types/folder.interface";
import styles from "./FolderToolBar.module.css";
import share from "../../public/icons/share.svg";
import pen from "../../public/icons/pen.svg";
import deleteIcon from "../../public/icons/delete.svg";
import Image from "next/image";

const FolderToolBar = ({
  folderData,
  filteredItems,
  selectedButtonName,
  onFolderSelect,
}: folderToolBarProps) => {
  const {
    isModalOpen,
    openModal,
    closeModal,
    modalType,
    changeModalType,
    modalTitle,
    modalButtonName,
  } = useModal();

  const handleModalOpen = ({
    title,
    buttonName,
    modalType,
  }: handleModalType) => {
    openModal(true, title, buttonName, modalType);
  };

  return (
    <div className={styles.FolderToolBarContainer}>
      <div className={styles.FolderToolBarHeader}>
        <div className={styles.FolderButtonGroup}>
          <FolderButton
            folderData={folderData}
            onFolderSelect={onFolderSelect}
            selectedButtonName={selectedButtonName}
          />
        </div>
        <div className={styles.AddFolderButtonWrapper}>
          <button
            className={styles.AddFolderButton}
            onClick={() => {
              handleModalOpen({
                title: "폴더 추가",
                buttonName: "추가하기",
                modalType: "folder-add",
              });
            }}
          >
            폴더 추가 +
          </button>
        </div>
        <h2 className={styles.SelectedFolderName}>{selectedButtonName}</h2>
        {selectedButtonName !== ALL && (
          <div className={styles.FolderActionButtonGroup}>
            <button
              className={styles.FolderActionButton}
              onClick={() => {
                handleModalOpen({ title: "폴더 공유", modalType: "share" });
              }}
            >
              <Image
                className={styles.ActionButtonIcon}
                src={share}
                alt="폴더 공유 버튼"
              />
            </button>
            <button
              className={styles.FolderActionButton}
              onClick={() => {
                handleModalOpen({
                  title: "폴더 이름 변경",
                  buttonName: "변경하기",
                  modalType: "edit",
                });
              }}
            >
              <Image
                className={styles.ActionButtonIcon}
                src={pen}
                alt="폴더 이름 변경 버튼"
              />
            </button>
            <button
              className={styles.FolderActionButton}
              onClick={() =>
                handleModalOpen({
                  title: "폴더 삭제",
                  buttonName: "삭제하기",
                  modalType: "delete",
                })
              }
            >
              <Image
                className={styles.ActionButtonIcon}
                src={deleteIcon}
                alt="폴더 삭제 버튼"
              />
            </button>
          </div>
        )}
      </div>
      <FolderCardList
        filteredItems={filteredItems}
        isModalOpen={isModalOpen}
        modalType={modalType}
        openModal={openModal}
        closeModal={closeModal}
        changeModalType={changeModalType}
        modalTitle={modalTitle}
        modalButtonName={modalButtonName}
        folderData={folderData}
      />
      {isModalOpen && modalType === "edit" && (
        <ModalEdit
          closeModal={closeModal}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
        />
      )}
      {isModalOpen && modalType === "folder-add" && (
        <ModalEdit
          closeModal={closeModal}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
        />
      )}
      {isModalOpen && modalType === "share" && (
        <ModalShare closeModal={closeModal} modalTitle={modalTitle} />
      )}
      {isModalOpen && modalType === "delete" && (
        <ModalDelete
          closeModal={closeModal}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
        />
      )}
    </div>
  );
};

export default FolderToolBar;
