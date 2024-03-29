import styled from "styled-components";
import closeBtn from "../../assets/icons/close.svg";
import { modalType } from "../../interfaces/folder.interface";

const ModalDelete = ({
  closeModal,
  modalTitle,
  modalButtonName,
}: modalType) => {
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
            <p>폴더명</p>
          </S.ModalTitle>
          <S.ModalContent>
            <S.ModalDeleteBtn>{modalButtonName}</S.ModalDeleteBtn>
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
      color: var(--gray100);
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

  ModalDeleteBtn: styled.button`
    background-color: var(--red);
    border-radius: 0.8rem;
    border: none;
    color: #f5f5f5;
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

export default ModalDelete;
