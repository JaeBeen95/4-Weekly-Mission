import { useState, useEffect } from "react";
import styled from "styled-components";
import {
  navigationProps,
  userType,
} from "../../interfaces/navigation.interface";
import linkbrary from "../../assets/icons/linkbrary.svg";
import profileImg from "../../assets/icons/myprofile.svg";
import { apiURL, fetchData } from "./fetchData";

const Navigation = ({ position = "sticky", url = apiURL }: navigationProps) => {
  const [user, setUser] = useState<null | userType>(null);

  useEffect(() => {
    fetchData().then((data) => setUser(data));
  }, [url]);

  return (
    <S.Navigation position={position}>
      <S.Wrap>
        <a href="/">
          <img src={linkbrary} alt="링크브러리 로고" />
        </a>
        {user ? (
          <S.MyProfile>
            <S.ProfileImg src={profileImg} alt="나의 프로필 이미지" />
            <S.ProfileEmail>{user.email}</S.ProfileEmail>
          </S.MyProfile>
        ) : (
          <a href="/">
            <S.SignIn>로그인</S.SignIn>
          </a>
        )}
      </S.Wrap>
    </S.Navigation>
  );
};

const S = {
  Navigation: styled.nav<{ position: string }>`
    display: flex;
    justify-content: center;
    z-index: 10;
    width: 100%;
    background-color: var(--background);

    ${({ position }) =>
      position === "sticky"
        ? `
          position: sticky;
          top: 0;
        `
        : `
          position: static;
        `}
  `,

  Wrap: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 6.3rem;
    padding: 0 3.2rem;

    @media (min-width: 768px) {
      height: 9.4rem;
      max-width: 86.3rem;
    }

    @media (min-width: 1200px) {
      max-width: 192rem;
      padding: 0 20rem;
    }
  `,

  MyProfile: styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.6rem;
  `,

  ProfileImg: styled.img`
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
  `,

  ProfileEmail: styled.span`
    display: none;
    font-size: 1.4rem;
    color: var(--gray100);

    @media (min-width: 768px) {
      display: inline;
    }
  `,

  SignIn: styled.span`
    display: inline-block;
    width: 8rem;
    padding: 1rem 0;
    font-size: 1.4rem;
    font-weight: 600;
    text-align: center;
    border-radius: 0.8rem;
    color: var(--white);
    background: var(
      --Linkbrary-gradation,
      linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)
    );

    @media (min-width: 768px) {
      width: 12.8rem;
      padding: 1.6rem 0;
      font-size: 1.8rem;
    }
  `,
};

export default Navigation;
