import { useState } from "react";
import styled from "styled-components";
import closeBtn from "../../assets/icons/close.svg";
import { modalType } from "../../interfaces/folder.interface";

const ModalAdd = ({
  folderData,
  closeModal,
  modalTitle,
  modalButtonName,
}: modalType) => {
  const [isButtonClick, setIsButtonClick] = useState<null | number>(null);

  const handleClick = (id: null | number) => {
    setIsButtonClick(id);
  };

  return (
    <>
      <S.ModalBg />
      <S.ModalBox>
        <S.ModalCloseBtn onClick={() => closeModal()}>
          <img src={closeBtn} alt="" />
        </S.ModalCloseBtn>
        <S.ModalItems>
          <S.ModalTitle>
            <h2>{modalTitle}</h2>
            <p>링크 주소</p>
          </S.ModalTitle>
          <S.ModalContent>
            <S.ModalFolderList>
              {folderData?.map(({ id, name, link }) => (
                <S.FolderListBtn
                  key={id}
                  onClick={() => handleClick(id)}
                  isClick={isButtonClick === id}
                >
                  <S.FolderListName>{name}</S.FolderListName>
                  <S.FolderListCount>{link.count}개 링크</S.FolderListCount>
                </S.FolderListBtn>
              ))}
            </S.ModalFolderList>
            <S.ModalAddBtn>{modalButtonName}</S.ModalAddBtn>
          </S.ModalContent>
        </S.ModalItems>
      </S.ModalBox>
    </>
  );
};

const S = {
  ModalBg: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--black);
    opacity: 0.5;
    z-index: 100;
  `,

  ModalBox: styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 32rem;
    background-color: var(--white);
    border-radius: 1.6rem;
    padding: 2.4rem;
    z-index: 101;
  `,

  ModalCloseBtn: styled.button`
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    width: 2.4rem;
    height: 2.4rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
  `,

  ModalItems: styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 2.4rem;
  `,

  ModalTitle: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 0.8rem;

    h2 {
      font-size: 2rem;
    }

    p {
      color: var(--gray60);
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  `,

  ModalContent: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    width: 100%;
  `,

  ModalFolderList: styled.div`
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    gap: 0.4rem;
    width: 100%;
    max-height: 17.2rem;
  `,

  FolderListBtn: styled.button<{ isClick: boolean }>`
    position: relative;
    background-color: var(--white);
    align-items: center;
    border-radius: 0.8rem;
    gap: 0.8rem;
    display: flex;
    flex: 0 0 4rem;
    height: 4rem;
    padding: 0.8rem;
    width: 100%;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: var(--background);
    }

    ${({ isClick }) =>
      isClick &&
      `
        background-color: var(--background);

        &::after {
          content: "";
          position: absolute;
          background-image: url(../../assets/icons/check.svg);
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          right: 0.8rem;
          width: 1.4rem;
          height: 1.4rem;
        }
      `}
  `,

  FolderListName: styled.span`
    color: var(--gray100);
    font-size: 1.6rem;
  `,

  FolderListCount: styled.span`
    color: var(--gray60);
    font-size: 1.4rem;
  `,

  ModalAddBtn: styled.button`
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    border-radius: 0.8rem;
    border: none;
    color: var(--gray5);
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.8rem 1.5rem;
    width: 100%;
    height: 5.1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  `,
};

export default ModalAdd;
