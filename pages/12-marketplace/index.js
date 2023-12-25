import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "../backToTop";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import FooterOne from "@/components/Footer/Footer-One";
import Cart from "@/components/Header/Offcanvas/Cart";
import HeaderStyleNine from "@/components/Header/HeaderStyle-Nine";
import Marketplace from "@/components/12-Marketplace/12-Marketplace";

const MarketplacePage = () => {
  return (
    <>
      <PageHead title="Marketplace - Online Courses & Education Bootstrap5 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleNine headerType="" />
          <Marketplace />
          <Cart />

          <BackToTop />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default MarketplacePage;
