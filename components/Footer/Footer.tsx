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
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.policyAndFaq}>Privacy Policy FAQ</div>
        <div className={styles.sns}>
          {SNS_LIST.map(({ name, href, logo }) => (
            <Link key={name} href={href} passHref>
              <a>
                <Image src={logo} alt={name} width={24} height={24} />
              </a>
            </Link>
          ))}
        </div>
        <span className={styles.address}>©codeit - 2023</span>
      </div>
    </footer>
  );
};

export default Footer;
