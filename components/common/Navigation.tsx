import { useState, useEffect } from "react";
import { NavigationProps, UserType } from "../../types/navigation.type";
import linkbrary from "../../public/icons/linkbrary.svg";
import profileImg from "../../public/icons/myprofile.svg";
import { apiURL, fetchData } from "./fetchData";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.css";

const Navigation = ({ position = "sticky", url = apiURL }: NavigationProps) => {
  const [user, setUser] = useState<null | UserType>(null);

  useEffect(() => {
    fetchData().then((data) => setUser(data));
  }, [url]);

  return (
    <nav className={`${styles.navigation} ${styles[position]}`}>
      <div className={styles.wrap}>
        <Link href="/" passHref>
          <a>
            <Image
              src={linkbrary}
              alt="링크브러리 로고"
              width={133}
              height={24}
              priority
            />
          </a>
        </Link>
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
