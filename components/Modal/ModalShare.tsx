import { Modal } from "../../types/modal.type";
import closeBtn from "../../public/icons/close.svg";
import Image from "next/image";
import styles from "./ModalShare.module.css";
import { SHARE_OPTIONS } from "@/constants/Modal/SHARE_OPTIONS";

const ModalShare = ({ closeModal, modalTitle }: Modal) => {
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
          <div className={styles.modalTitle}>
            <h2>{modalTitle}</h2>
            <p>폴더명</p>
          </div>
          <div className={styles.modalShareContent}>
            {SHARE_OPTIONS.map((option, index) => (
              <a
                key={index}
                href={option.url}
                onClick={option.onClick ? (e) => option.onClick(e) : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalSns}
              >
                <span className={styles[option.style]}>
                  <Image src={option.imgSrc} alt={option.altText} />
                </span>
                <p>{option.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalShare;
