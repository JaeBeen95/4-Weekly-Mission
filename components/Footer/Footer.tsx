import styles from "./Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const SNS_LIST = [
  {
    name: "facebook",
    logo: "/icons/facebook.svg",
    href: "https://www.facebook.com/",
  },
  {
    name: "twitter",
    logo: "/icons/twitter.svg",
    href: "https://www.twitter.com/",
  },
  {
    name: "youtube",
    logo: "/icons/youtube.svg",
    href: "https://www.youtube.com/",
  },
  {
    name: "instagram",
    logo: "/icons/instagram.svg",
    href: "https://www.instagram.com/",
  },
];

const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Wrap}>
        <div className={styles.PolicyAndFaq}>Privacy Policy FAQ</div>
        <div className={styles.Sns}>
          {SNS_LIST.map(({ name, href, logo }) => (
            <Link key={name} href={href}>
              <Image src={logo} alt={name} width={24} height={24} />
            </Link>
          ))}
        </div>
        <span className={styles.Address}>©codeit - 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
