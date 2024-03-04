import { useEffect } from "react";
import { Provider } from "react-redux";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

import PageHead from "../Head";
import Store from "@/redux/store";
import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import Banner from "@/components/Common/Banner";
import BackToTop from "../backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import BlogGridMinimal from "@/components/Blogs/BlogGridMinimal";

const BlogGridMinimalLayout = ({ posts }) => {

  return (
    <>
      <PageHead title="Blog Grid - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <Banner col="col-lg-12" text="All Blog" getBlog={posts} />
          <div className="rbt-blog-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <BlogGridMinimal
                isPagination={true}
                BlogPostData={posts}
                top={true}
                start={0}
                end={6}
              />
            </div>
          </div>

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default BlogGridMinimalLayout;

export async function getStaticProps() {
  // Get files from the post directory
  const files = fs.readdirSync(path.join("data/blog"));

  // Get slug and post data from posts
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    // Get post data
    const markdownWithMeta = fs.readFileSync(
      path.join("data/blog", filename),
      "utf-8"
    );

    const { data: postData } = matter(markdownWithMeta);

    return {
      slug,
      postData,
    };
  });

  return {
    props: {
      posts: posts,
    },
  };
}
