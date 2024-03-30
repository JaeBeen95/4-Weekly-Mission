import Navigation from "../components/common/Navigation";
import Footer from "../components/Footer/Footer";
import SharedUserSection from "../components/Shared/SharedUserSection";
import SharedCardList from "../components/Shared/SharedCardList";
import * as S from "../styles/page.styled";

const Shared = () => {
  return (
    <>
      <Navigation position="sticky" />
      <S.MainSection>
        <SharedUserSection />
        <S.MainWrapper>
          <SharedCardList />
        </S.MainWrapper>
      </S.MainSection>
      <Footer />
    </>
  );
};

export default Shared;
