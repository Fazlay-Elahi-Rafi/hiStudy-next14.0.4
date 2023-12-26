"use client";

import React, { useEffect } from "react";
import CourseDetails from "../../../../data/course-details/courseData.json";

import CategoryHead from "@components/Category/CategoryHead";
import CourseFilterOneOpen from "@components/Category/Filter/CourseFilterOneOpen";

const Page = ({ params }) => {
  const slugify = function (text) {
    return text
      .toString()
      .toLowerCase()
      .replace(/\d+/g, "") // Remove all numeric digits
      .replace("&", "")
      .replace(/\s+/g, " ") // Replace spaces with -
      .replace(/[^\w-]+/g, "") // Remove all non-word chars
      .replace(/--+/g, "-") // Replace multiple - with single -
      .replace(/^-+/, "") // Trim - from start of text
      .replace(/-+$/, ""); // Trim - from end of text
  };
  const courseCategory = slugify(params.id);

  let getCourse;

  getCourse = JSON.parse(JSON.stringify(CourseDetails.courseDetails));

  const checkMatchCourse = getCourse.filter(
    (course) => slugify(course.category) === courseCategory
  );

  useEffect(() => {
    if (!checkMatchCourse) {
      window.location.href = "/not-found";
    }
  }, []);

  if (!checkMatchCourse) {
    return null;
  }
  return (
    <>
      <CategoryHead category={checkMatchCourse[0]} />

      <div className="rbt-section-overlayping-top rbt-section-gapBottom">
        <div className="inner">
          <div className="container">
            <CourseFilterOneOpen course={checkMatchCourse} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
