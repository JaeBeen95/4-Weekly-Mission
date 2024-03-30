import { useState, useEffect } from "react";
import { elapsedTime } from "../../utils/utils";
import { fetchData } from "./fetchData";
import { formatCreatedAt } from "../../utils/utils";
import { cardDataType } from "../../types/shared.interface";
import styled from "styled-components";

const CardList = () => {
  const [cardData, setCardData] = useState<cardDataType[]>([]);

  useEffect(() => {
    fetchData().then((data) => {
      setCardData(data);
    });
  }, []);

  return (
    <S.CardList>
      {cardData.map(({ id, url, imageSource, createdAt, description }) => (
        <S.Card key={id} href={url} target="_blank" rel="noopener noreferrer">
          <S.CardImg $imageSource={imageSource} />
          <S.Content>
            <S.ElapsedTime>{elapsedTime(createdAt)}</S.ElapsedTime>
            <S.Description>{description}</S.Description>
            <S.CreatedAt>{formatCreatedAt(createdAt)}</S.CreatedAt>
          </S.Content>
        </S.Card>
      ))}
    </S.CardList>
  );
};

const S = {
  CardList: styled.div`
    display: grid;
    grid-template-columns: repeat(32.5rem);
    justify-content: center;
    width: 100%;
    max-width: 106rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(auto-fill, 34rem);
      row-gap: 2.5rem;
      column-gap: 2rem;
    }
  `,

  Card: styled.a`
    display: flex;
    flex-direction: column;
    width: 32.5rem;
    height: 32.7rem;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.08);
    border-radius: 15px;
    overflow: hidden;

    @media (min-width: 768px) {
      width: 34rem;
      height: 33.4rem;
    }
  `,

  CardImg: styled.div<{ $imageSource: string }>`
    width: 100%;
    min-height: 19.2rem;
    height: 19.2rem;
    border-radius: 15px 15px 0 0;
    background-image: url(${({ $imageSource }) => $imageSource});
    background-position: center;
    background-size: 100%;
    transition: background-size 0.3s ease-in-out;

    @media (min-width: 768px) {
      min-height: 20rem;
      height: 20rem;
    }

    &:hover {
      background-size: 130%;
    }
  `,

  Content: styled.div`
    height: 100%;
    padding: 1.5rem 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  `,

  ElapsedTime: styled.span`
    font-size: 1.3rem;
    color: var(--gray80);
  `,

  Description: styled.p`
    height: 4.9rem;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 1.6rem;
    line-height: 150%;
  `,

  CreatedAt: styled.p`
    font-size: 1.4rem;
    color: var(--grey100);
  `,
};

export default CardList;
