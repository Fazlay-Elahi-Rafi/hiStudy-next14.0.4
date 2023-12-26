import React from "react";
import CourseActionBottom from "@/components/Course-Details/Course-Sections/Course-Action-Bottom";
import SimilarCourses from "@/components/Course-Details/Course-Sections/SimilarCourses";
import CourseHead from "@/components/Course-Details/Course-Sections/course-head";
import CourseDetailsOne from "@/components/Course-Details/CourseDetails-One";

const SingleCourse = ({ checkMatch }) => {
  return (
    <>
      <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        {/* <CourseHead checkMatch={checkMatch} /> */}
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
    </>
  );
};

export default SingleCourse;
