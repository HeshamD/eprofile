import styles from "../style";

const ContactMeCircle = () => {
  return (
    <a href="https://example.com">
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-blue-gradient p-[2px] cursor-pointer`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary w-[100%] h-[100%] rounded-full`}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
              <span className="text-gradient">Contact</span>
            </p>
            <img
              src="/arrow-up.svg"
              alt="arrow-up"
              className="w-[23px] h-[23px] object-contain"
            />
          </div>

          <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
            <span className="text-gradient">Me</span>
          </p>
        </div>
      </div>
    </a>
  );
};

export default ContactMeCircle;
