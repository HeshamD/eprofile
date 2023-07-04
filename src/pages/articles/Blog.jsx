import Page from "../../components/page";
import BlogContentBox from "../../components/BlogContentBox";
import { blogs } from "../../consts/homePage/blogsContent";

const Blog = () => {
  return (
    <Page>
      <BlogContentBox
        blogData={blogs}
        title="Recent Blogs"
        content="These projects list is in update from time to time due to working on
            different projects"
      />
    </Page>
  );
};

export default Blog;
