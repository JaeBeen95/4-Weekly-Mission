import { useState } from "react";
import closeBtn from "../../public/icons/close.svg";
import { modalType } from "../../types/folder.interface";
import Image from "next/image";
import styles from "./ModalAdd.module.css";

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
      <div className={styles.modalBg} />
      <div className={styles.modalBox}>
        <button className={styles.modalCloseBtn} onClick={() => closeModal()}>
          <Image src={closeBtn} width={24} height={24} alt="" />
        </button>
        <div className={styles.modalItems}>
          <div className={styles.modalTitle}>
            <h2>{modalTitle}</h2>
            <p>링크 주소</p>
          </div>
          <div className={styles.modalContent}>
            <div className={styles.modalFolderList}>
              {folderData?.map(({ id, name, link }) => (
                <button
                  key={id}
                  onClick={() => handleClick(id)}
                  className={`${styles.folderListBtn} ${
                    isButtonClick === id ? "isClick" : ""
                  }`}
                >
                  <span className={styles.folderListName}>{name}</span>
                  <span className={styles.folderListCount}>
                    {link.count}개 링크
                  </span>
                </button>
              ))}
            </div>
            <button className={styles.modalAddBtn}>{modalButtonName}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalAdd;
