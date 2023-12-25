import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import FooterOne from "@/components/Footer/Footer-One";
import Separator from "@/components/Common/Separator";
import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import MobileMenu from "@/components/Header/MobileMenu";

const MainDemoLayout = () => {
  return (
    <>
      <MobileMenu />
      <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
      <MainDemo />

      <Separator />
      <FooterOne />
    </>
  );
};

export default MainDemoLayout;
