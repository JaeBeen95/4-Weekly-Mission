import { modal } from "../../types/modal.type";
import closeBtn from "../../public/icons/close.svg";
import kakaoImg from "../../public/icons/kakao.svg";
import facebookImg from "../../public/icons/facebook.svg";
import linkImg from "../../public/icons/link.svg";
import Image from "next/image";
import styles from "./ModalShare.module.css";
import Link from "next/link";

const ModalShare = ({ closeModal, modalTitle }: modal) => {
  const hostAddress = "https://yourdomain.com"; // 각자 주소 바꾸기
  const shareUrl = `${hostAddress}/shared/${1}`; // id값도 바꾸기
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    shareUrl
  )}`;

  const copyToClipboard = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(shareUrl).then(
      () => {
        alert("링크가 클립보드에 복사되었습니다.");
      },
      (err) => {
        console.error("클립보드 복사 실패:", err);
      }
    );
  };

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
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalSns}
            >
              <Image src={kakaoImg} alt="" className={styles.kakaoImg} />
              <p>카카오톡</p>
            </Link>
            <Link
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalSns}
            >
              <Image src={facebookImg} alt="" className={styles.facebookImg} />
              <p>페이스북</p>
            </Link>
            <Link
              href="/"
              onClick={copyToClipboard}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.modalSns}
            >
              <Image src={linkImg} alt="" className={styles.linkImg} />
              <p>링크 복사</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalShare;
