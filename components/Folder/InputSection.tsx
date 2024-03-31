import { useState } from "react";
import { InputSectionProps } from "../../types/folder.interface";
import linkImg from "../../public/icons/link.svg";
import ModalAdd from "../Modal/ModalAdd";
import styles from "./InputSection.module.css";
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
    <div className={styles.InputSection}>
      <form className={styles.InputForm} onSubmit={handleSubmit}>
        <div className={styles.InputBox}>
          <Image src={linkImg} alt="" />
          <input className={styles.Input} placeholder="링크를 추가해보세요" />
        </div>
        <button className={styles.LinkButton} type="submit">
          <div className={styles.CTA}>추가하기</div>
        </button>
      </form>
      {isModalOpen && (
        <ModalAdd
          folderData={folderData}
          closeModal={closeModal}
          modalTitle="폴더에 추가"
          modalButtonName="추가하기"
        />
      )}
    </div>
  );
};

export default InputSection;
