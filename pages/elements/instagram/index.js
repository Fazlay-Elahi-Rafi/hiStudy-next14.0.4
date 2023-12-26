import PageHead from "@/pages/Head";
import Store from "@/redux/store";
import { Provider } from "react-redux";
import Context from "@/context/Context";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Instagram from "@/components/Instagram/Instagram";

const InstagramPage = () => {
  return (
    <>
      <PageHead title="Instagram - Online Courses & Education Bootstrap5 Template" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <BreadCrumb title="Instagram" text="Instagram" />

          <div className="rbt-instagram-area bg-color-white rbt-section-gap">
            <Instagram />
          </div>

          <MobileMenu />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default InstagramPage;
