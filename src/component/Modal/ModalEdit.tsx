import styled from "styled-components";
import closeBtn from "../../assets/icons/close.svg";
import { modalType } from "../../interfaces/folder.interface";

const ModalEdit = ({ closeModal, modalTitle, modalButtonName }: modalType) => {
  return (
    <>
      <S.ModalBg />
      <S.ModalBox>
        <S.ModalCloseBtn
          onClick={() => {
            closeModal();
          }}
        >
          <img src={closeBtn} alt="" />
        </S.ModalCloseBtn>
        <S.ModalItems>
          <h2>{modalTitle}</h2>
          <S.ModalContent>
            <S.ModalInput type="text" placeholder="내용 입력" />
            <S.ModalChangeBtn>{modalButtonName}</S.ModalChangeBtn>
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

    h2 {
      color: var(--gray100);
      font-size: 2rem;
      text-align: center;
    }
  `,

  ModalContent: styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    width: 100%;
  `,

  ModalInput: styled.input`
    background-color: initial;
    border: 1px solid var(--gray20);
    border-radius: 0.8rem;
    color: var(--gray100);
    font-size: 1.6rem;
    cursor: pointer;
    padding: 1.8rem 1.5rem;
    width: 100%;

    &:hover {
      border: 1px solid var(--primary);
    }

    &:focus {
      outline: none;
      border: 1px solid var(--primary);
    }
  `,

  ModalChangeBtn: styled.button`
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

export default ModalEdit;
