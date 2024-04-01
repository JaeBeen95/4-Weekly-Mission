import closeBtn from "../../public/icons/close.svg";
import { modal } from "../../types/modal.type";
import Image from "next/image";
import styles from "./ModalEdit.module.css";

const ModalEdit = ({ closeModal, modalTitle, modalButtonName }: modal) => {
  return (
    <>
      <div className={styles.modalBg} />
      <div className={styles.modalBox}>
        <button
          className={styles.modalCloseBtn}
          onClick={() => {
            closeModal();
          }}
        >
          <Image src={closeBtn} width={24} height={24} alt="" />
        </button>
        <div className={styles.modalItems}>
          <h2>{modalTitle}</h2>
          <div className={styles.modalContent}>
            <input
              type="text"
              placeholder="내용 입력"
              className={styles.modalInput}
            />
            <button className={styles.modalChangeBtn}>{modalButtonName}</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalEdit;
