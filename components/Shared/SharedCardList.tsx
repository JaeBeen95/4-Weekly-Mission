import { useState, useEffect } from "react";
import { elapsedTime } from "../../utils/utils";
import { fetchData } from "./fetchData";
import { formatCreatedAt } from "../../utils/utils";
import { CardListType } from "../../types/shared.type";
import styles from "./SharedCardList.module.css";
import Link from "next/link";

const CardList = () => {
  const [cardList, setCardList] = useState<CardListType[]>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setCardList(data);
    });
  }, []);

  return (
    <div className={styles.cardList}>
      {cardList.map(({ id, url, imageSource, createdAt, description }) => (
        <Link
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.card}
        >
          <>
            <div
              className={styles.cardImg}
              style={{ backgroundImage: `url(${imageSource})` }}
            />
            <div className={styles.content}>
              <span className={styles.elapsedTime}>
                {elapsedTime(createdAt)}
              </span>
              <p className={styles.description}>{description}</p>
              <p className={styles.createdAt}>{formatCreatedAt(createdAt)}</p>
            </div>
          </>
        </Link>
      ))}
    </div>
  );
};

export default CardList;
