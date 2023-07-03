import styles from "../style";
import PropTypes from "prop-types";

const BlogContentBox = ({ blogData, title, content }) => {
  return (
    <section
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h2 className={styles.heading2}>{title}</h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]}`}>
            {content}
          </p>
        </div>
      </div>

      {blogData.map((blog, index) => (
        <div
          key={index}
          className="w-full flex flex-col md:flex-row sm:mb-16 mb-6 relative z-[1]"
        >
          <div className="w-full md:w-1/3">
            <div className={`${styles.imageContainer} ${styles.imageEffect}`}>
              <img
                src={blog.image}
                alt={blog.image}
                className="object-cover h-48 md:h-auto md:max-h-full w-full"
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 md:pl-6">
            <h2
              className={styles.heading2}
              dangerouslySetInnerHTML={{ __html: blog.header }}
            ></h2>
            <p
              className={`${styles.paragraph} text-left max-w-[450px]}`}
              dangerouslySetInnerHTML={{ __html: blog.content }}
            ></p>
          </div>
        </div>
      ))}
    </section>
  );
};

BlogContentBox.propTypes = {
  blogData: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      header: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired // Add the link prop type
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default BlogContentBox;
