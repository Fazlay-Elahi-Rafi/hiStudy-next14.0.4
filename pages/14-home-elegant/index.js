import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "../backToTop";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import FooterOne from "@/components/Footer/Footer-One";
import Cart from "@/components/Header/Offcanvas/Cart";

import HeaderStyleSix from "@/components/Header/HeaderStyle-Six";
import Separator from "@/components/Common/Separator";

const HomeElegantPage = () => {
  return (
    <>
      <PageHead title="Home Elegant - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleSix headerType="" />
          <Cart />

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default HomeElegantPage;
