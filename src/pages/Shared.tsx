import Navigation from "../component/common/Navigation";
import Footer from "../component/Footer/Footer";
import UserSection from "../component/Shared/SharedUserSection";
import CardList from "../component/Shared/SharedCardList";
import * as S from "./page.styled";

const Shared = () => {
  return (
    <>
      <Navigation position="sticky" />
      <S.MainSection>
        <UserSection />
        <S.MainWrapper>
          <CardList />
        </S.MainWrapper>
      </S.MainSection>
      <Footer />
    </>
  );
};

export default Shared;
