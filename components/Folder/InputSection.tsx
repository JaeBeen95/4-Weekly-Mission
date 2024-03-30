import { useState } from "react";
import { InputSectionProps } from "../../types/folder.interface";
import linkImg from "../../public/icons/link.svg";
import ModalAdd from "../Modal/ModalAdd";
import styled from "styled-components";
import Image from "next/image";

const InputSection = ({ folderData }: InputSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <S.InputSection>
      <S.InputForm onSubmit={handleSubmit}>
        <S.InputBox>
          <Image src={linkImg} alt="" />
          <S.Input placeholder="링크를 추가해보세요" />
        </S.InputBox>
        <S.LinkButton type="submit">
          <S.CTA>추가하기</S.CTA>
        </S.LinkButton>
      </S.InputForm>
      {isModalOpen && (
        <ModalAdd
          folderData={folderData}
          closeModal={closeModal}
          modalTitle="폴더에 추가"
          modalButtonName="추가하기"
        />
      )}
    </S.InputSection>
  );
};

const S = {
  InputSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 2.4rem 3.2rem 4rem;
    background-color: var(--background);

    @media (min-width: 768px) {
      padding: 6rem 3.2rem 9rem;
    }
  `,

  InputForm: styled.form`
    align-items: center;
    background-color: #fff;
    border: 0.1rem solid #6d6afe;
    border-radius: 1.5rem;
    column-gap: 1rem;
    display: flex;
    height: 5.3rem;
    max-width: 80rem;
    padding: 0 1rem;
    width: 100%;

    @media (min-width: 768px) {
      column-gap: 2rem;
      height: 6.9rem;
      padding: 0 2rem;
    }
  `,

  InputBox: styled.div`
    align-items: center;
    column-gap: 0.8rem;
    display: flex;
    width: 100%;

    @media (min-width: 768px) {
      column-gap: 1.2rem;
    }
  `,

  Input: styled.input`
    font-size: 1.4rem;
    height: 5.1rem;
    line-height: 150%;
    width: 100%;

    @media (min-width: 768px) {
      font-size: 1.6rem;
      height: 6.7rem;
    }
  `,

  LinkButton: styled.button`
    color: inherit;
    font-size: 1.4rem;
    height: 3.7rem;
    width: 8rem;
    background-color: initial;
    border: none;
    cursor: pointer;
    padding: initial;
  `,

  CTA: styled.div`
    align-items: center;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    border-radius: 0.8rem;
    color: #f5f5f5;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 100%;
  `,
};

export default InputSection;
