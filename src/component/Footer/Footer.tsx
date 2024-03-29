import "./Footer.css";
import facebookIcon from "../../assets/icons/facebook.svg";
import twitterIcon from "../../assets/icons/instagram.svg";
import youtubeIcon from "../../assets/icons/youtube.svg";
import instagramIcon from "../../assets/icons/instagram.svg";

const SNS_LIST = [
  {
    name: "facebook",
    logo: facebookIcon,
    href: "https://www.facebook.com/",
  },
  {
    name: "twitter",
    logo: twitterIcon,
    href: "https://www.twitter.com/",
  },
  {
    name: "youtube",
    logo: youtubeIcon,
    href: "https://www.youtube.com/",
  },
  {
    name: "instagram",
    logo: instagramIcon,
    href: "https://www.instagram.com/",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrap">
        <span className="address">©codeit - 2023</span>
        <div className="policy-and-faq">
          <a href="/">Privacy Policy</a>
          <a href="/">FAQ</a>
        </div>
        <div className="sns">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
