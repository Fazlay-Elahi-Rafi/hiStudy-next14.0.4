import React, { useEffect } from "react";
import { useRouter } from "next/router";
import CourseData from "../../../data/course-details/courseData.json";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";

import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import Cart from "@/components/Header/Offcanvas/Cart";
import BackToTop from "@/pages/backToTop";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import CourseHead from "@/components/Course-Details/Course-Sections/course-head";

const SingleCourse = () => {
  const router = useRouter();
  const postId = parseInt(router.query.courseId);
  let getCourse;

  getCourse = JSON.parse(JSON.stringify(CourseData.courseDetails));

  const checkMatch = getCourse.find((course) => course.id === postId);

  useEffect(() => {
    const foundCourse = getCourse.find((course) => course.id === postId);
    if (postId && !foundCourse) {
      router.push("/404");
    }
  }, [checkMatch]);

  // if (!checkMatch) {
  //   return null;
  // }

  // console.log("checkMatch", checkMatch);

  return (
    <>
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <Cart />

          <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
            <CourseHead
              checkMatch={checkMatch !== undefined ? checkMatch : ""}
            />
          </div>

          <div className="rbt-course-details-area ptb--60">
            <div className="container">
              <div className="row g-5">
                {/* <CourseDetailsOne checkMatchCourses={checkMatch} /> */}
              </div>
            </div>
          </div>

          {/* <CourseActionBottom checkMatchCourses={checkMatch} /> */}

          <div className="rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom">
            {/* <SimilarCourses checkMatchCourses={checkMatch.similarCourse} /> */}
          </div>

          <BackToTop />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SingleCourse;
