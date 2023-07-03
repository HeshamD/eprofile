import { FaLinkedin, FaYoutube, FaMedium } from "react-icons/fa";
import styles from "../style";
const Footer = () => {
  const footerLinks = [
    {
      title: "Useful Links",
      links: [
        {
          name: "Projects",
          link: "https://www.hoobank.com/content/"
        },
        {
          name: "Work Experience",
          link: "https://www.hoobank.com/content/"
        },
        {
          name: "Degrees",
          link: "https://www.hoobank.com/content/"
        }
      ]
    },
    {
      title: "Community",
      links: [
        {
          name: "Blogs",
          link: "https://www.hoobank.com/blog/"
        },
        {
          name: "Awards",
          link: "https://www.hoobank.com/content/"
        }
      ]
    },
    {
      title: "Social Media",
      links: [
        {
          name: "Contacts",
          link: "https://www.hoobank.com/create/"
        }
      ]
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/hesham-eldawy/",
      icon: (
        <FaLinkedin className="text-white hover:text-secondary mr-4 w-6 h-6" />
      )
    },
    // {
    //   name: "YouTube",
    //   link: "https://www.youtube.com/channel/hoobank",
    //   icon: (
    //     <FaYoutube className="text-white hover:text-secondary mr-4 w-6 h-6" />
    //   )
    // },
    {
      name: "Medium",
      link: "https://medium.com/@heshameldawy__",
      icon: (
        <FaMedium className="text-white hover:text-secondary mr-4 w-6 h-6" />
      )
    },
    {
      name: "Mostaql Freelance",
      link: "https://mostaql.com/u/PlatinumDawy",
      icon: (
        <img src="/mostaqle.png" alt="Mostaql Freelance" className="w-10 h-6" />
      )
    }
  ];

  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex-[1] flex flex-col justify-start mr-10">
          <img
            src="/logo.png"
            alt="hoobank"
            className="w-[266px] h-[72.14px] object-contain"
          />
          <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
            Collaborate on software projects or consult for your software needs—
            contact me today.
          </p>
        </div>

        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerlink) => (
            <div
              key={footerlink.title}
              className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}
            >
              <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
                {footerlink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerlink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          Copyright Ⓒ 2023 Hesham Eldawy. All Rights Reserved.
        </p>

        <div className="flex flex-row md:mt-0 mt-6">
          {/* Render the social media links */}
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-secondary mr-4"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
