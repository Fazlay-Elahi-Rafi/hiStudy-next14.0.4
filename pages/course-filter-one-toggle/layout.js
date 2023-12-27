import "../../public/scss/style.scss";
import MobileMenu from "@components/Header/MobileMenu";
import Separator from "@components/Common/Separator";
import FooterOne from "@components/Footer/Footer-One";
import HeaderStyleTen from "@components/Header/HeaderStyle-Ten";

export const metadata = {
  title:
    "Course Filter One Toggle - Online Courses & Education Bootstrap5 Template",
  description: "Course Filter One Toggle Page Description",
  icons: {
    icon: ["/favicon.ico"],
  },
};

const BlogLayout = ({ children }) => {
  return (
    <>
      <HeaderStyleTen headerSticky="rbt-sticky" headerType={true} />
      {children}

      <MobileMenu />
      <Separator />
      <FooterOne />
    </>
  );
};

export default BlogLayout;
