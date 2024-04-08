import kakaoImg from "../../public/icons/kakao.svg";
import facebookImg from "../../public/icons/facebook.svg";
import linkImg from "../../public/icons/link.svg";

const hostAddress = "https://yourdomain.com"; // TODO: 각자 주소 바꾸기
const shareUrl = `${hostAddress}/shared/${1}`; // TODO: id값도 바꾸기
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

export const SHARE_OPTIONS = [
  {
    name: "카카오톡",
    url: "/",
    imgSrc: kakaoImg,
    altText: "카카오톡",
    style: "kakaoImg",
  },
  {
    name: "페이스북",
    url: facebookShareUrl,
    imgSrc: facebookImg,
    altText: "페이스북",
    style: "facebookImg",
  },
  {
    name: "링크 복사",
    url: "/",
    imgSrc: linkImg,
    altText: "링크 복사",
    style: "linkImg",
    onClick: copyToClipboard,
  },
];
