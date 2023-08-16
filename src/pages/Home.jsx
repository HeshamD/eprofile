import Navbar from "../components/Navbar";
import styles from "../style";
import Hero from "../components/Hero";
import InfoLine from "../components/infoLine";
import Footer from "../components/Footer";
import ContentBox from "../components/contentBox";
import BlogContentBox from "../components/BlogContentBox";
import { blogData } from "../consts/homePage/blogsContent";
import { projectsCardInfo } from "../consts/homePage/projectsContent";
const Home = () => {
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
          <ContentBox
            cardInfo={projectsCardInfo}
            boxTitle="Recent Projects"
            boxContent="These projects list is in update from time to time due to working on
            different projects"
          />
          <BlogContentBox
            blogData={blogData}
            title="Recent Blogs"
            content="These blogs list is in update from time to time due to working on
            different projects"
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
