// import "../../public/scss/styles.scss";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import FooterOne from "@/components/Footer/Footer-One";
import Separator from "@/components/Common/Separator";
import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import MobileMenu from "@/components/Header/MobileMenu";
import Context from "@/context/Context";

// import HeaderStyleTen from "@components/Header/HeaderStyle-Ten";

const MainDemoLayout = () => {
  return (
    <Context>
      <MobileMenu />
      <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
      <MainDemo />

      <Separator />
      <FooterOne />
    </Context>
  );
};

export default MainDemoLayout;
