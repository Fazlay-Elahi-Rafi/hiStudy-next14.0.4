// import "../../public/scss/styles.scss";
import FooterOne from "@/components/Footer/Footer-One";
import Separator from "@/components/Common/Separator";
import Page from "./01-main-demo/page";
import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";

// import MobileMenu from "@components/Header/MobileMenu";
// import HeaderStyleTen from "@components/Header/HeaderStyle-Ten";

const MainDemoLayout = ({ children }) => {
  return (
    <>
      {/* <MobileMenu /> */}
      {/* <HeaderStyleTen headerSticky="rbt-sticky" headerType="" /> */}
      <MainDemo />

      <Separator />
      <FooterOne />
    </>
  );
};

export default MainDemoLayout;
