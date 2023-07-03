import Navbar from "../components/Navbar";
import styles from "../style";
import Hero from "../components/Hero";
import InfoLine from "../components/infoLine";
import Footer from "../components/Footer";
import ContentBox from "../components/contentBox";
import BlogContentBox from "../components/BlogContentBox";
const HomePage = () => {
  const stats = [{ title: "Years of Experience", value: "4+" }];
  const projectsCardInfo = [
    {
      content: `The application to summarize articles by pasting the url in the input form
      Connecting with AI API for summarizing the articles.
      Using Redux to connect to the API and to get specific data from the call`,
      title: "AI Summrizer",
      img: "/projectsImgs/AIsummrizer.png"
    },
    {
      content:
        "This is a full stack application where the vehicles information been loaded from an API to show all the cars with a search bar.",
      title: "Car dealership",
      img: "/projectsImgs/carDealer.png"
    }
    // Add more card objects as needed
  ];
  const blogData = [
    {
      content: `In this article, I explained the 4 pillars in OOP which they are Abstraction, Inheritance, Encapsulation, Polymorphism.</br>
      In OOP, we bring together the data and methods that operate on it in a single Object.</br>
      OOP programming paradigm is often a better choice for creating graphical user interfaces and games.</br>
      <strong class="blue_gradient">Benfits of OOP</strong> 
      <ul>
       <li><strong>Reduces complexity:</strong> by breaking down a large complex application into smaller, more manageable and easier to maintain objects</li>
       <li><strong>Easier Maintenance:</strong> Every part can work together and fix independently</li>
       <li><strong>Reduces complexity:</strong> Create templets</li>
       <li><strong>Reduces complexity:</strong> Less time building applications</li>
      </ul>
      `,
      header: `<strong class="orange_gradient">OOP concepts</strong>`,
      image:
        "https://scaler.com/topics/images/object-oriented-programming-concepts-1024x870.jpg"
    },
    {
      content:
        "This is a full stack application where the vehicles information been loaded from an API to show all the cars with a search bar.",
      header: "Car dealership",
      image: "/projectsImgs/carDealer.png"
    },
    {
      content:
        "This is a full stack application where the vehicles information been loaded from an API to show all the cars with a search bar.",
      header: "Car dealership",
      image: "/projectsImgs/carDealer.png"
    },
    {
      content:
        "This is a full stack application where the vehicles information been loaded from an API to show all the cars with a search bar.",
      header: "Car dealership",
      image: "/projectsImgs/carDealer.png"
    }
  ];
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
            content="These projects list is in update from time to time due to working on
            different projects"
          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
