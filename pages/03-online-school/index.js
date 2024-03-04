import PageHead from "../Head";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import BackToTop from "../backToTop";

import Context from "@/context/Context";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import Separator from "@/components/Common/Separator";
import FooterThree from "@/components/Footer/Footer-Three";
import HeaderStyleEleven from "@/components/Header/HeaderStyle-Eleven";
import OnlineSchool from "@/components/03-online-school/OnlineSchool";

const SnlineSchoolPage = () => {
  return (
    <>
      <PageHead title="Online School - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleEleven />
          <Cart />

          <OnlineSchool />

          <BackToTop />
          <Separator />
          <FooterThree />
        </Context>
      </Provider>
    </>
  );
};

export default SnlineSchoolPage;
