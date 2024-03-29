import Navigation from "../component/Navigation/Navigation";
import Footer from "../component/Footer/Footer";
import UserSection from "../component/Shared/UserSection/UserSection";
import CardList from "../component/Shared/CardList/SharedCardList";
import "./page.css";

const Shared = () => {
  return (
    <>
      <Navigation position="sticky" />
      <section className="main-section">
        <UserSection />
        <div className="wrap">
          <CardList />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Shared;
