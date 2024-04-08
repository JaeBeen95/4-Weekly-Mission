import Navigation from "../../components/common/Navigation";
import Footer from "../../components/Footer/Footer";
import SharedUserSection from "../../components/Shared/SharedUserSection";
import SharedCardList from "../../components/Shared/SharedCardList";
import styles from "../../styles/page.module.css";

const Shared = () => {
  return (
    <>
      <Navigation position="sticky" />
      <section className={styles.mainSection}>
        <SharedUserSection />
        <div className={styles.mainWrapper}>
          <SharedCardList />
        </div>
        <Footer />
      </section>
    </>
  );
};

export default Shared;
