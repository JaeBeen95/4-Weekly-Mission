import { useState, useEffect } from "react";
import { elapsedTime } from "../../../utils/utils";
import { fetchData } from "./fetchData";
import { formatCreatedAt } from "../../../utils/utils";
import { cardDataType } from "../../../interfaces/shared.interface";
import "./SharedCardList.css";

const CardList = () => {
  const [cardData, setCardData] = useState<cardDataType[]>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setCardData(data);
    });
  }, []);

  return (
    <div className="card-list">
      {cardData.map(({ id, url, imageSource, createdAt, description }) => (
        <a
          className="card"
          key={id}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="cardImg"
            style={{ backgroundImage: `url(${imageSource})` }}
          ></div>
          <div className="content">
            <span className="elapsed-time">{elapsedTime(createdAt)}</span>
            <p className="description">{description}</p>
            <p className="createdAt">{formatCreatedAt(createdAt)}</p>
          </div>
        </a>
      ))}
    </div>
  );
};

export default CardList;
