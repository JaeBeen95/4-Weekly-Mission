import { useState } from "react";
import useModal from "../../hooks/useModal";
import FolderButton from "./FolderButton/FolderButton";
import FolderCardList from "../FolderToolBar/FolderCardList/FolderCardList";
import ModalEdit from "../Modal/ModalEdit";
import ModalShare from "../Modal/ModalShare";
import ModalDelete from "../Modal/ModalDelete";
import { ALL } from "../../utils/utils";
import "./FolderToolBar.css";
import share from "../../images/share.svg";
import pen from "../../images/pen.svg";
import deleteIcon from "../../images/delete.svg";

const FolderToolBar = ({
  folderNameData,
  links,
  selectedButtonName,
  onFolderSelect,
}) => {
  const { isModalOpen, openModal, closeModal, modalType, changeModalType } =
    useModal();
  const [modalTitle, setModalTitle] = useState("");
  const [modalButtonName, setModalButtonName] = useState("");

  const handleAddFolderClick = () => {
    setModalTitle("폴더 추가");
    setModalButtonName("추가하기");
    changeModalType("edit");
    openModal(true);
  };

  const handleEditButtonClick = () => {
    setModalTitle("폴더 이름 변경");
    setModalButtonName("변경하기");
    changeModalType("edit");
    openModal(true);
  };

  const handleShareButtonClick = () => {
    changeModalType("share");
    openModal(true);
  };

  const handleDeleteButtonClick = () => {
    changeModalType("delete");
    openModal(true);
  };

  return (
    <div className="container">
      <div className="button-container">
        <div className="folder-buttons">
          <FolderButton
            folderNameData={folderNameData}
            onFolderSelect={onFolderSelect}
            selectedButtonName={selectedButtonName}
          />
        </div>
        <div className="add-button-container">
          <button className="add-button" onClick={handleAddFolderClick}>
            <span>폴더 추가 +</span>
          </button>
        </div>
        <h2 className="selected-btn">{selectedButtonName}</h2>
        {selectedButtonName !== ALL && (
          <div className="icon-button-container">
            <button onClick={handleShareButtonClick}>
              <img src={share} alt="" />
            </button>
            <button onClick={handleEditButtonClick}>
              <img src={pen} alt="" />
            </button>
            <button onClick={handleDeleteButtonClick}>
              <img src={deleteIcon} alt="" />
            </button>
          </div>
        )}
      </div>
      <FolderCardList
        links={links}
        isModalOpen={isModalOpen}
        modalType={modalType}
        openModal={openModal}
        closeModal={closeModal}
        changeModalType={changeModalType}
        folderNameData={folderNameData}
      />
      {isModalOpen && modalType === "edit" && (
        <ModalEdit
          closeModal={closeModal}
          modalTitle={modalTitle}
          modalButtonName={modalButtonName}
        />
      )}
      {isModalOpen && modalType === "share" && (
        <ModalShare closeModal={closeModal} />
      )}
      {isModalOpen && modalType === "delete" && (
        <ModalDelete closeModal={closeModal} />
      )}
    </div>
  );
};

export default FolderToolBar;
