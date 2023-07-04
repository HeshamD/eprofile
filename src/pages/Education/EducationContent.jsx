import { motion } from "framer-motion";
import PropTypes from "prop-types";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { textVariant } from "../../utils/motion";
import { styles } from "../../utils/styles";
import { degrees } from "../../consts/degrees";

const EducationCard = ({ degree }) => {
  const { collegeName, description, date, iconBg, icon, courses } = degree;

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
        padding: "1rem"
      }}
      contentArrowStyle={{ borderRight: "20px solid #232631" }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {icon && (
            <img
              src={icon}
              alt={collegeName}
              className="object-contain"
              style={{
                width: "80%",
                height: "80%"
              }}
            />
          )}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-2xl font-bold">{collegeName}</h3>
        <p className="text-secondary text-lg font-semibold">{description}</p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {courses.map((course, index) => (
          <li
            key={`education-course-${index}`}
            className="text-white text-base pl-1 tracking-wider"
          >
            {course}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const EducationContent = () => {
  return (
    <div className="block py-16 px-6">
      <motion.div variants={textVariant()}>
        <h2
          className={`${styles.sectionHeadText} text-center font-serif text-gradient`}
        >
          My Education Journey
        </h2>
        <p className="text-white text-lg sm:px-6">
          As a dedicated software engineer, I have embarked on an enriching
          education journey that has equipped me with the knowledge and skills
          to excel in the dynamic field of technology. Throughout my studies, I
          have delved deep into various programming languages, frameworks, and
          software development methodologies. My passion for problem-solving and
          innovation has driven me to explore cutting-edge concepts and stay
          updated with the latest industry trends. With a strong foundation in
          computer science and a relentless drive to learn, I am committed to
          delivering exceptional software solutions and making a positive impact
          in the digital world.
        </p>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {degrees.map((degree, index) => (
            <EducationCard key={`education-${index}`} degree={degree} />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default EducationContent;

EducationCard.propTypes = {
  degree: PropTypes.shape({
    collegeName: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    icon: PropTypes.string,
    iconBg: PropTypes.string.isRequired,
    courses: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};
