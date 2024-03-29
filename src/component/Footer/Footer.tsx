import styled from "styled-components";
import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/instagram.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import instagramIcon from "../../assets/icons/instagram.svg";

const SNS_LIST = [
  { name: "facebook", logo: facebookIcon, href: "https://www.facebook.com/" },
  { name: "twitter", logo: twitterIcon, href: "https://www.twitter.com/" },
  { name: "youtube", logo: youtubeIcon, href: "https://www.youtube.com/" },
  {
    name: "instagram",
    logo: instagramIcon,
    href: "https://www.instagram.com/",
  },
];

const Footer = () => {
  return (
    <S.Footer>
      <S.Wrap>
        <S.Address>©codeit - 2023</S.Address>
        <S.PolicyAndFaq>
          <a href="/">Privacy Policy</a>
          <a href="/">FAQ</a>
        </S.PolicyAndFaq>
        <S.Sns>
          {SNS_LIST.map(({ name, href, logo }) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="no opener noreferrer"
            >
              <img src={logo} alt={`${name} 홈페이지로 연결된 ${name} 로고`} />
            </a>
          ))}
        </S.Sns>
      </S.Wrap>
    </S.Footer>
  );
};

const S = {
  Footer: styled.footer`
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 16rem;
    margin-top: 4rem;
    background-color: var(--black);

    @media (min-width: 768px) {
      margin-top: 6rem;
    }
  `,

  Wrap: styled.div`
    display: grid;
    justify-content: space-between;
    grid-template:
      "policy-and-fap sns"
      ". ." 1fr
      "address .";
    width: 100%;
    padding: 3.2rem;
    color: var(--gray100);
    font-size: 1.6rem;
    font-family: Arial;

    @media (min-width: 768px) {
      grid-template: "address policy-and-fap sns";
      height: fit-content;
      max-width: 192rem;
      padding: 3.2rem 10.4rem 0;
    }
  `,

  Address: styled.span`
    grid-area: address;
    color: var(--gray80);
    font-family: Arial;
    font-size: 1.6rem;
  `,

  PolicyAndFaq: styled.div`
    grid-area: policy-and-fap;
    display: flex;
    column-gap: 3rem;
    padding-right: 1.8rem;
    color: #cfcfcf;
    font-family: Arial;
    font-size: 1.6rem;
  `,

  Sns: styled.div`
    grid-area: sns;
    display: flex;
    column-gap: 1.2rem;
  `,
};

export default Footer;
