import { useState, useEffect } from "react";
import { UserType } from "../../types/shared.interface";
import { fetchData } from "./SharedUserfetchData";
import styled from "styled-components";

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
    <S.FolderSection>
      <S.Avatar src={folder.owner.profileImageSource} alt="프로필" />
      <S.User>@{folder.owner.name}</S.User>
      <S.FolderName>{folder.name}</S.FolderName>
    </S.FolderSection>
  );
};

const S = {
  FolderSection: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem 0 4rem;
    background-color: var(--background);

    @media (min-width: 768px) {
      padding: 2rem 0 6rem;
    }
  `,

  Avatar: styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    @media (min-width: 768px) {
      width: 6rem;
      height: 6rem;
    }
  `,

  User: styled.span`
    margin-top: 0.6rem;
    font-size: 1.4rem;

    @media (min-width: 768px) {
      margin-top: 1.2rem;
      font-size: 1.6rem;
      line-height: 150%;
    }
  `,

  FolderName: styled.h2`
    margin-top: 1rem;
    font-size: 3.2rem;
    font-weight: 600;

    @media (min-width: 768px) {
      margin-top: 2rem;
      font-size: 4rem;
    }
  `,
};

export default UserSection;
