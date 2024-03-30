import styled from "styled-components";

export const MainSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  gap: 2rem;
  padding-bottom: 26rem;

  @media (min-width: 768px) {
    gap: 4rem;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 112.4rem;
  gap: 3.2rem;
  padding: 0 3.2rem;

  @media (min-width: 768px) {
    gap: 4rem;
  }
`;
