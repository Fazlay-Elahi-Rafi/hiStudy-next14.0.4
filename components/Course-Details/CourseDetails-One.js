import Content from "./Course-Sections/Content";
import CourseBanner from "./Course-Sections/Course-Banner";
import CourseMenu from "./Course-Sections/Course-Menu";
import Overview from "./Course-Sections/Overview";

const CourseDetailsOne = ({ checkMatchCourses }) => {
  return (
    <>
      <div className="col-lg-8">
        <div className="course-details-content">
          <div className="rbt-course-feature-box rbt-shadow-box thuumbnail">
            {checkMatchCourses.courseImg && (
              <CourseBanner bannerImg={checkMatchCourses.courseImg} />
            )}
          </div>
          <div className="rbt-inner-onepage-navigation sticky-top mt--30">
            <CourseMenu />
          </div>

          {checkMatchCourses &&
            checkMatchCourses.courseOverview.map((data, index) => (
              <Overview {...data} key={index} checkMatchCourses={data} />
            ))}

          <div
            className="course-content rbt-shadow-box coursecontent-wrapper mt--30"
            id="coursecontent"
          >
            {checkMatchCourses &&
              checkMatchCourses.courseContent.map((data, index) => (
                <Content {...data} key={index} checkMatchCourses={data} />
              ))}
          </div>

          <div
            className="rbt-course-feature-box rbt-shadow-box details-wrapper mt--30"
            id="details"
          >
            <div className="row g-5">
              {/* {checkMatchCourses.courseRequirement.map((data, index) => (
                <Requirements {...data} key={index} checkMatchCourses={data} />
              ))} */}
            </div>
          </div>
          <div
            className="rbt-instructor rbt-shadow-box intructor-wrapper mt--30"
            id="intructor"
          >
            {/* {checkMatchCourses.courseInstructor.map((data, index) => (
              <Instructor {...data} key={index} checkMatchCourses={data} />
            ))} */}
          </div>
          <div
            className="rbt-review-wrapper rbt-shadow-box review-wrapper mt--30"
            id="review"
          >
            {/* <Review /> */}
          </div>

          {/* {checkMatchCourses.featuredReview.map((data, index) => (
            <Featured {...data} key={index} coursesFeatured={data} />
          ))} */}
        </div>
        <div className="related-course mt--60">
          {/* {checkMatchCourses.relatedCourse.map((data, index) => (
            <RelatedCourse {...data} key={index} checkMatchCourses={data} />
          ))} */}
        </div>
      </div>

      <div className="col-lg-4">
        <div className="course-sidebar sticky-top rbt-shadow-box course-sidebar-top rbt-gradient-border">
          <div className="inner">
            {/* <Viedo checkMatchCourses={checkMatchCourses} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseDetailsOne;
