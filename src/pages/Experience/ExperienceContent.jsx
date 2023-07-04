/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { textVariant } from "../../utils/motion";
import { styles } from "../../utils/styles";
import { experiences } from "../../consts/experience";
const ExperienceCard = ({ experiences }) => {
  const { title, company_name, date, iconBg, icon, points } = experiences;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        padding: "1rem"
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experiences.icon.src}
            alt={company_name}
            className="object-contain"
            style={{
              width: experiences.icon.width, // Update the width value to experiences.icon.width
              height: experiences.icon.height // Update the height value to experiences.icon.height
            }}
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-secondary text-lg font-semibold">{company_name}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white text-base pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const ExperienceContent = () => {
  return (
    <div className="block py-16 px-6">
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} text-center font-serif text-gradient`}
        >
          Work Experience.
        </h2>
        <p className="text-white text-lg sm:px-6">
          As a software engineer, I have gained valuable experience working on a
          diverse range of projects. Throughout my career, I have collaborated
          with cross-functional teams to develop and implement innovative
          software solutions. From designing scalable architectures to writing
          efficient and maintainable code, I am well-versed in the entire
          software development life cycle. I have a strong problem-solving
          aptitude and thrive in dynamic environments, where I can apply my
          analytical skills to overcome technical challenges. With a keen eye
          for detail and a passion for creating robust and user-friendly
          applications, I am committed to delivering high-quality software
          solutions that exceed client expectations.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experiences={experience} // Fix the prop name here
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default ExperienceContent;

ExperienceCard.propTypes = {
  experiences: PropTypes.shape({
    company_name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    iconBg: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.string,
      height: PropTypes.string
    }).isRequired,
    points: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};
