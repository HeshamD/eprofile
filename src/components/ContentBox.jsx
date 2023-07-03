import styles from "../style";
import CardInfo from "./CardInfo";
import PropTypes from "prop-types";

const ContentBox = ({ cardInfo, boxTitle, boxContent }) => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>
          {boxTitle}
          <br className="sm:block hidden" />
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            {boxContent}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {cardInfo.map((card, index) => (
          <CardInfo key={index} {...card} />
        ))}
      </div>
    </section>
  );
};
ContentBox.propTypes = {
  cardInfo: PropTypes.arrayOf(PropTypes.object).isRequired,
  boxTitle: PropTypes.string.isRequired,
  boxContent: PropTypes.string.isRequired
};
export default ContentBox;
