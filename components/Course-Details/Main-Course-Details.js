"use client";

import CourseData from "../../data/course-details/courseData.json";

import React, { useEffect } from "react";

import CourseHead from "./Course-Sections/course-head";
import CourseDetailsOne from "./CourseDetails-One";
import CourseActionBottom from "./Course-Sections/Course-Action-Bottom";
import SimilarCourses from "./Course-Sections/SimilarCourses";

const MainCourseDetails = ({ params }) => {
  const postId = parseInt(params.id);
  let getCourse;

  getCourse = JSON.parse(JSON.stringify(CourseData.courseDetails));

  const checkMatch = getCourse.find((course) => course.id === postId);

  useEffect(() => {
    const foundCourse = getCourse.find((course) => course.id === postId);

    if (!foundCourse) {
      window.location.href = "/not-found";
    }
  }, []);

  if (!checkMatch) {
    return null;
  }
  return (
    <>
      <div className="rbt-breadcrumb-default rbt-breadcrumb-style-3">
        <CourseHead checkMatch={checkMatch} />
      </div>

      <div className="rbt-course-details-area ptb--60">
        <div className="container">
          <div className="row g-5">
            <CourseDetailsOne checkMatchCourses={checkMatch} />
          </div>
        </div>
      </div>

      <CourseActionBottom checkMatchCourses={checkMatch} />

      <div className="rbt-related-course-area bg-color-white pt--60 rbt-section-gapBottom">
        <SimilarCourses checkMatchCourses={checkMatch.similarCourse} />
      </div>
    </>
  );
};

export default MainCourseDetails;
