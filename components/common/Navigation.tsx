import { useState, useEffect } from "react";
import { navigationProps, userType } from "../../types/navigation.interface";
import linkbrary from "../../public/icons/linkbrary.svg";
import profileImg from "../../public/icons/myprofile.svg";
import { apiURL, fetchData } from "./fetchData";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navigation.module.css";

const Navigation = ({ position = "sticky", url = apiURL }: navigationProps) => {
  const [user, setUser] = useState<null | userType>(null);

  useEffect(() => {
    fetchData().then((data) => setUser(data));
  }, [url]);

  return (
    <nav className={`${styles.navigation} ${styles[position]}`}>
      <div className={styles.wrap}>
        <Link href="/">
          <Image
            src={linkbrary}
            alt="링크브러리 로고"
            width={133}
            height={24}
            priority
          />
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
          <Link href="/">
            <span className={styles.signIn}>로그인</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
