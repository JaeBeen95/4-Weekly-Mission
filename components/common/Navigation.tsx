import { useState, useEffect } from "react";
import { NavigationProps, UserType } from "../../types/navigation.type";
import profileImg from "../../public/icons/myprofile.svg";
import { apiURL, fetchData } from "./fetchData";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.css";
import LinkbraryLogo from "./LinkbraryLogo";

const Navigation = ({ position = "sticky", url = apiURL }: NavigationProps) => {
  const [user, setUser] = useState<null | UserType>(null);

  useEffect(() => {
    fetchData().then((data) => setUser(data));
  }, [url]);

  return (
    <nav className={`${styles.navigation} ${styles[position]}`}>
      <div className={styles.wrap}>
        <LinkbraryLogo />
        {user ? (
          <div className={styles.myProfile}>
            <Image
              src={profileImg}
              alt="나의 프로필 이미지"
              className={styles.profileImg}
            />
            <span className={styles.profileEmail}>{user.email}</span>
          </div>
        ) : (
          <Link href="/" passHref>
            <span className={styles.signIn}>로그인</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
