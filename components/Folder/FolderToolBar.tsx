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
import styled from "styled-components";
import share from "../../public/icons/share.svg";
import pen from "../../public/icons/pen.svg";
import deleteIcon from "../../public/icons/delete.svg";

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
    <S.FolderToolBarContainer>
      <S.FolderToolBarHeader>
        <S.FolderButtonGroup>
          <FolderButton
            folderData={folderData}
            onFolderSelect={onFolderSelect}
            selectedButtonName={selectedButtonName}
          />
        </S.FolderButtonGroup>
        <S.AddFolderButtonWrapper>
          <S.AddFolderButton
            onClick={() => {
              handleModalOpen({
                title: "폴더 추가",
                buttonName: "추가하기",
                modalType: "folder-add",
              });
            }}
          >
            폴더 추가 +
          </S.AddFolderButton>
        </S.AddFolderButtonWrapper>
        <S.SelectedFolderName>{selectedButtonName}</S.SelectedFolderName>
        {selectedButtonName !== ALL && (
          <S.FolderActionButtonGroup>
            <S.FolderActionButton
              onClick={() => {
                handleModalOpen({ title: "폴더 공유", modalType: "share" });
              }}
            >
              <S.ActionButtonIcon src={share} alt="폴더 공유 버튼" />
            </S.FolderActionButton>
            <S.FolderActionButton
              onClick={() => {
                handleModalOpen({
                  title: "폴더 이름 변경",
                  buttonName: "변경하기",
                  modalType: "edit",
                });
              }}
            >
              <S.ActionButtonIcon src={pen} alt="폴더 이름 변경 버튼" />
            </S.FolderActionButton>
            <S.FolderActionButton
              onClick={() =>
                handleModalOpen({
                  title: "폴더 삭제",
                  buttonName: "삭제하기",
                  modalType: "delete",
                })
              }
            >
              <S.ActionButtonIcon src={deleteIcon} alt="폴더 삭제 버튼" />
            </S.FolderActionButton>
          </S.FolderActionButtonGroup>
        )}
      </S.FolderToolBarHeader>
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
    </S.FolderToolBarContainer>
  );
};

const S = {
  FolderToolBarContainer: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    @media (min-width: 768px) {
      row-gap: 2.4rem;
    }
  `,
  FolderToolBarHeader: styled.div`
    align-items: flex-start;
    display: flex;
    flex-direction: column;
    row-gap: 1.2rem;
    @media (min-width: 768px) {
      grid-row-gap: 2.4rem;
      grid-column-gap: 1.2rem;
      align-items: center;
      column-gap: 1.2rem;
      display: grid;
      grid-template-areas:
        "folderButtons folderButtons addFolderButton"
        "selectedFolderName folderActionButtons folderActionButtons";
      justify-content: space-between;
      row-gap: 2.4rem;
    }
  `,
  FolderButtonGroup: styled.div`
    column-gap: 0.8rem;
    display: flex;
    flex-grow: 1;
    flex-wrap: wrap;
    grid-area: folderButtons;
    row-gap: 1.2rem;
  `,
  AddFolderButtonWrapper: styled.div`
    bottom: 10.1rem;
    grid-area: addFolderButton;
    left: 50%;
    position: fixed;
    transform: translateX(-50%);
    z-index: 100;
    @media (min-width: 768px) {
      justify-self: flex-end;
      position: static;
      transform: none;
    }
  `,
  AddFolderButton: styled.button`
    align-items: center;
    border-radius: 2rem;
    color: #e7effb;
    gap: 0.4rem;
    display: flex;
    font-size: 1.6rem;
    font-weight: 500;
    height: 3.5rem;
    padding: 0 2.4rem;
    background-color: var(--primary);
    @media (min-width: 768px) {
      background-color: transparent;
      color: #6d6afe;
      padding: 0;
    }
  `,
  SelectedFolderName: styled.h2`
    font-size: 2rem;
    font-weight: 600;
    grid-area: selectedFolderName;
    letter-spacing: -0.02rem;
    margin-top: 1.6rem;
    @media (min-width: 768px) {
      font-size: 2.4rem;
      margin-top: 0;
    }
  `,
  FolderActionButtonGroup: styled.div`
    gap: 1.2rem;
    display: flex;
    grid-area: folderActionButtons;
    justify-self: flex-start;
    @media (min-width: 768px) {
      justify-self: flex-end;
    }
    button {
      border: none;
    }
  `,

  FolderActionButton: styled.button``,
  ActionButtonIcon: styled.img``,
};

export default FolderToolBar;
