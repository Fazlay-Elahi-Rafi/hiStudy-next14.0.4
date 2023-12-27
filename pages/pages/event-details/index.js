import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import BackToTop from "@/pages/backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import PageHead from "@/pages/Head";

const EventLayout = () => {
  const router = useRouter();
  const postId = router.query.eventId;

  useEffect(() => {
    if (postId === undefined) {
      router.push("/pages/event-list");
    }
  }, []);

  return (
    <>
      <PageHead title="Event Details - Online Courses & Education Bootstrap5 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="" headerType={true} />

          <Cart />

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default EventLayout;
