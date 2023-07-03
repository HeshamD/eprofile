import PropTypes from "prop-types";

const CardInfo = ({ content, title, img }) => {
  return (
    <div className="flex justify-between flex-col px-10 py-12 rounded-[20px]  max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
      <img
        src={img}
        alt="double_quotes"
        className="w-full h-full object-cover mb-3"
      />
      <h4
        className="font-poppins font-semibold text-[20px] leading-[32px] text-white"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h4>
      <p
        className="font-poppins font-normal text-[15px] leading-[32.4px] text-white my-10"
        dangerouslySetInnerHTML={{ __html: content }}
      ></p>
    </div>
  );
};

CardInfo.propTypes = {
  content: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};

export default CardInfo;
