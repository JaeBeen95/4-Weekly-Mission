import closeBtn from "../../public/icons/close.svg";
import { modal } from "../../types/modal.type";
import Image from "next/image";
import styles from "./ModalDelete.module.css";

const ModalDelete = ({ closeModal, modalTitle, modalButtonName }: modal) => {
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
            <p>폴더명</p>
          </div>
          <div className={styles.modalContent}>
            <button className={styles.modalDeleteBtn}>{modalButtonName}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
