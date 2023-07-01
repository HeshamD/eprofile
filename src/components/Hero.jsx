import styles from "../style";
import ContactMeCircle from "./ContactMeCircle";
const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        {/* Hero Title */}
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Hesham <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Eldawy</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <ContactMeCircle />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          Software Engineer
        </h1>
        <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
          I'm a passionate software engineer with a knack for crafting elegant
          solutions to complex problems. With a solid foundation in computer
          science and a drive for continuous learning, I thrive in collaborative
          environments where I can contribute to innovative projects. My
          expertise spans across full-stack development, agile methodologies,
          and building scalable applications that deliver seamless user
          experiences.
        </p>
      </div>

      <div
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
      >
        <img
          src="/robot2.png"
          alt="billing"
          className="w-[100%] h-[100%] relative z-[5]"
        />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>
    </section>
  );
};

export default Hero;
