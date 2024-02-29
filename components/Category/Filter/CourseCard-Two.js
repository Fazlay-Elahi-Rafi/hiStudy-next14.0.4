import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import sal from "sal.js";

import { useAppContext } from "@/context/Context";

import Pagination from "@/components/Common/Pagination";

const CourseCardTwo = ({ course, start, end }) => {
  const { toggle } = useAppContext();
  const [courses, setCourse] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const startIndex = (page - 1) * 6;

  const getSelectedCourse = courses.slice(startIndex, startIndex + 6);

  const handleClick = (num) => {
    setPage(num);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setCourse(course);
    setTotalPages(Math.ceil(course.length / 6));

    sal({
      threshold: 0.01,
      once: true,
    });
  }, [setTotalPages, setCourse, getSelectedCourse]);

  return (
    <>
      <div
        className={`rbt-course-grid-column list-column-half ${
          toggle ? "active-list-view" : ""
        }`}
      >
        {course.slice(start, end).map((data, index) => (
          <div
            className="course-grid-4"
            data-sal-delay="150"
            data-sal="slide-up"
            data-sal-duration="800"
            key={index}
          >
            <div
              className={`rbt-card variation-01 rbt-hover ${
                toggle ? "card-list-2" : ""
              }`}
            >
              <div className="rbt-card-img">
                <Link href={`/course-details-2/${data.id}`}>
                  <Image
                    src={data.courseImg}
                    width={235}
                    height={330}
                    alt="Card image"
                  />
                </Link>
              </div>
              <div className="rbt-card-body">
                <div className="rbt-category">
                  <a href="#">Design</a>
                  <a href="#">Development</a>
                </div>
                <h4 className="rbt-card-title">
                  <Link href={`/course-details-2/${data.id}`}>
                    {data.courseTitle}
                  </Link>
                </h4>
                <span className="lesson-number">
                  {data.lesson} lessons
                  <span className="lesson-time ms-2">(4 hours total)</span>
                </span>
                <p className="rbt-card-text">
                  It is a long established fact that a reader will be
                  distracted.
                </p>
                <div className="rbt-card-bottom">
                  <Link
                    className="transparent-button"
                    href={`/course-details-2/${data.id}`}
                  >
                    Learn More
                    <i className="feather-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {course.length > 6 ? (
        <div className="row">
          <div className="col-lg-12 mt--60">
            <Pagination
              totalPages={totalPages}
              pageNumber={page}
              handleClick={handleClick}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CourseCardTwo;
