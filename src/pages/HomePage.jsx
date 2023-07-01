import Navbar from "../components/Navbar";
import styles from "../style";
import Hero from "../components/Hero";
import InfoLine from "../components/infoLine";
import Footer from "../components/Footer";
const HomePage = () => {
  const stats = [{ title: "Years of Experience", value: "4+" }];

  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <InfoLine stats={stats} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
