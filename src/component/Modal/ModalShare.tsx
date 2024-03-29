import { modalType } from "../../interfaces/folder.interface";
import styled from "styled-components";
import closeBtn from "../../assets/icons/close.svg";
import kakaoImg from "../../assets/icons/kakao.svg";
import facebookImg from "../../assets/icons/facebook.svg";
import linkImg from "../../assets/icons/link.svg";

const ModalShare = ({ closeModal, modalTitle }: modalType) => {
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
          <S.ModalTitle>
            <h2>{modalTitle}</h2>
            <p>폴더명</p>
          </S.ModalTitle>
          <S.ModalShareContent>
            <S.ModalSns href="/" target="_blank" rel="noopener noreferrer">
              <S.KakaoImg src={kakaoImg} alt="" />
              <p>카카오톡</p>
            </S.ModalSns>
            <S.ModalSns
              href={facebookShareUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.FacebookImg src={facebookImg} alt="" />
              <p>페이스북</p>
            </S.ModalSns>
            <S.ModalSns
              href="/"
              onClick={copyToClipboard}
              target="_blank"
              rel="noopener noreferrer"
            >
              <S.LinkImg src={linkImg} alt="" />
              <p>링크 복사</p>
            </S.ModalSns>
          </S.ModalShareContent>
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
      font-size: 2rem;
    }

    p {
      color: var(--gray60);
      font-size: 1.4rem;
      line-height: 2.2rem;
    }
  `,

  ModalShareContent: styled.div`
    display: flex;
    justify-content: center;
    gap: 3.2rem;
  `,

  ModalSns: styled.a`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
    text-decoration: none;

    p {
      color: var(--gray100);
      text-align: center;
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.5rem;
    }
  `,

  KakaoImg: styled.img`
    display: flex;
    padding: 1.2rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 3.7rem;
    width: 4.2rem;
    height: 4.2rem;
    background: #fee500;
  `,

  FacebookImg: styled.img`
    display: flex;
    padding: 1.2rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 3.7rem;
    width: 4.2rem;
    height: 4.2rem;
    background-color: #1877f2;
  `,

  LinkImg: styled.img`
    display: flex;
    padding: 1.2rem;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 3.7rem;
    width: 4.2rem;
    height: 4.2rem;
    background: rgba(157, 157, 157, 0.04);
  `,
};

export default ModalShare;
