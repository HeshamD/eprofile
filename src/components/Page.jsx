import "react-vertical-timeline-component/style.min.css";
import styles from "../style";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";

const Page = ({ children }) => {
  return (
    <div className="bg-black w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>{children}</div>
      </div>
      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node.isRequired
};

export default Page;
