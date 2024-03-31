import { useState, useEffect } from "react";
import { UserType } from "../../types/shared.interface";
import { fetchData } from "./SharedUserfetchData";
import styles from "./SharedUserSection.module.css";
import Image from "next/image";

const UserSection = () => {
  const [userData, setUserData] = useState<null | UserType>(null);

  useEffect(() => {
    fetchData().then((data) => setUserData(data));
  }, []);

  if (!userData) {
    return <div>로딩 중입니다</div>;
  }

  const { folder } = userData;

  return (
    <div className={styles.folderSection}>
      <Image
        width={28}
        height={28}
        src={folder.owner.profileImageSource}
        alt="프로필"
        className={styles.avatar}
      />
      <span className={styles.user}>@{folder.owner.name}</span>
      <h2 className={styles.folderName}>{folder.name}</h2>
    </div>
  );
};

export default UserSection;
