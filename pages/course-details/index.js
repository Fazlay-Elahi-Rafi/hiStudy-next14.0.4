import React, { useEffect } from "react";
import { Provider } from "react-redux";
import PageHead from "../Head";
import { useRouter } from "next/router";
import Store from "@/redux/store";
import Context from "@/context/Context";

import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "../backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";

const CourseLayout = () => {
  const router = useRouter();
  const postId = router.query.courseId;

  useEffect(() => {
    if (postId === undefined) {
      router.push("/course-filter-one-toggle");
    }
  }, []);

  return (
    <>
      <PageHead title="Course Details - Online Courses & Education Bootstrap5 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />

          <Cart />

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default CourseLayout;
