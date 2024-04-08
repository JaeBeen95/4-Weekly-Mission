import { useState } from "react";
import { InputSectionProps } from "../../types/folder.type";
import linkImg from "../../public/icons/link.svg";
import ModalAdd from "../Modal/ModalAdd";
import styles from "./InputSection.module.css";
import Image from "next/image";

const InputSection = ({ folderData }: InputSectionProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.inputSection}>
      <form className={styles.inputForm} onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <Image src={linkImg} alt="" />
          <input className={styles.input} placeholder="링크를 추가해보세요" />
        </div>
        <button className={styles.linkButton} type="submit">
          <div className={styles.cta}>추가하기</div>
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
