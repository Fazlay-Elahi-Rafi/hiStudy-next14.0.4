import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import "venobox/dist/venobox.min.css";

import SingleCourseData from "../../data/pages/11-singleCourse.json";
import TeamData from "../../data/elements/team.json";

import SingleCourseBanner from "./SingleCourseBanner";
import CourseSlider from "./CourseSlider";
import TestimonialSeven from "../Testimonials/Testimonial-Seven";
import PricingFive from "../Pricing/Pricing-Five";
import NewsletterFour from "../Newsletters/Newsletter-Four";

import courseImg from "../../public/images/course/course-elegant-01.jpg";

const SingleCourse = () => {
  useEffect(() => {
    import("venobox/dist/venobox.min.js").then((venobox) => {
      new venobox.default({
        selector: ".popup-video",
      });
    });
  }, []);
  return (
    <>
      <div
        className="slider-area rbt-banner-9 bg-gradient-2 header-transperent-spacer"
        style={{ paddingTop: 80 }}
      >
        <div className="container">
          <SingleCourseBanner />
        </div>
      </div>

      <div className="rbt-feature-area rbt-single-course-features rbt-section-gapBottom rbt-feature-box">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row row--30 gy-5 align-items-center">
                <div className="col-lg-6 col-xl-5">
                  <div className="thumbnail rbt-shadow-box">
                    {SingleCourseData &&
                      SingleCourseData.courseFeatureBox.map((data, index) => (
                        <Image
                          className="w-100 radius-10"
                          src={data.img}
                          key={index}
                          width={357}
                          height={500}
                          alt="Card image"
                        />
                      ))}
                  </div>
                </div>
                {SingleCourseData &&
                  SingleCourseData.courseFeatureBox.map((data, index) => (
                    <div className="col-lg-6 col-xl-7" key={index}>
                      <div className="section-title">
                        <h2 className="title">{data.title}</h2>
                        <p className="b1 mt--15">{data.desc}</p>
                      </div>

                      <div className="section-title subtitle">
                        <h5 className="title">Whats Material Includes?</h5>
                      </div>

                      <div className="row g-5">
                        <div className="col-lg-6">
                          <ul className="rbt-list-style-1">
                            {data.featureList
                              .slice(0, 5)
                              .map((innerData, innerIndex) => (
                                <li key={innerIndex}>
                                  <i className="feather-check"></i>
                                  {innerData.text}
                                </li>
                              ))}
                          </ul>
                        </div>{" "}
                        <div className="col-lg-6">
                          <ul className="rbt-list-style-1">
                            {data.featureList
                              .slice(5, 10)
                              .map((innerData, innerIndex) => (
                                <li key={innerIndex}>
                                  <i className="feather-check"></i>
                                  {innerData.text}
                                </li>
                              ))}
                          </ul>
                        </div>
                      </div>

                      <div className="read-more-btn mt--40">
                        <Link className="rbt-moderbt-btn" href="#">
                          <span className="moderbt-btn-text">
                            Learn More About Us
                          </span>
                          <i className="feather-arrow-right"></i>
                        </Link>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-course-banner-area rbt-section-gap bg-color-darker">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="inner">
                <div className="section-title text-center mb--60">
                  <h2 className="title color-white">
                    <span className="theme-gradient">Complete guideline</span>{" "}
                    from absolute <br /> beginners to getting hired.
                  </h2>
                  <div className="rbt-button-group mt--30">
                    <Link
                      className="rbt-btn btn-gradient hover-icon-reverse"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Explore Course</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </Link>

                    <Link
                      className="rbt-btn hover-icon-reverse btn-border color-white-off"
                      href="#"
                    >
                      <span className="icon-reverse-wrapper">
                        <span className="btn-text">Hired List</span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                        <span className="btn-icon">
                          <i className="feather-arrow-right"></i>
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="row g-5">
                  <div className="col-lg-12">
                    {SingleCourseData &&
                      SingleCourseData.certificate.map((data, index) => (
                        <div
                          className="modern-course-features-box h-100"
                          key={index}
                        >
                          {data.certificateOne.map((innerData, innerIndex) => (
                            <div className="inner" key={innerIndex}>
                              <div className="thumbnail">
                                <Image
                                  src={innerData.img}
                                  width={604}
                                  height={408}
                                  alt="Image"
                                />
                              </div>
                              <div className="content">
                                <span className="rbt-badge-6 bg-secondary-opacity">
                                  {innerData.tag}
                                </span>
                                <h2 className="title mt--10">
                                  {innerData.title}
                                </h2>
                                <p>{innerData.desc}</p>
                                <ul className="course-feature-list">
                                  {innerData.list.map((list, i) => (
                                    <li key={i}>
                                      <div className="icon">
                                        <Image
                                          src={list.icon}
                                          width={40}
                                          height={40}
                                          alt="Icon Image"
                                        />
                                      </div>
                                      <div className="feature-content">
                                        <h4 className="featute-title">
                                          {list.num}K+ <span>{list.text}</span>
                                        </h4>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                  </div>

                  <div className="col-lg-6">
                    {SingleCourseData &&
                      SingleCourseData.certificate.map((data, index) => (
                        <div
                          className="modern-course-features-box one-colume-grid h-100"
                          key={index}
                        >
                          {data.certificateTwo.map((innerData, innerIndex) => (
                            <div className="inner" key={innerIndex}>
                              <div className="thumbnail">
                                <Image
                                  src={innerData.img}
                                  width={558}
                                  height={397}
                                  alt="Image"
                                />
                              </div>
                              <div className="content">
                                <h2 className="title">{innerData.title}</h2>
                                <p>{innerData.desc}</p>
                                <ul className="course-feature-list">
                                  {innerData.list.map((list, i) => (
                                    <li key={i}>
                                      <div className="icon">
                                        <Image
                                          src={list.icon}
                                          width={40}
                                          height={40}
                                          alt="Icon Image"
                                        />
                                      </div>
                                      <div className="feature-content">
                                        <h4 className="featute-title">
                                          {list.num}K+ <span>{list.text}</span>
                                        </h4>
                                      </div>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                  </div>

                  <div className="col-lg-6">
                    <div className="modern-course-features-box grid-content-reverse h-100">
                      {SingleCourseData &&
                        SingleCourseData.certificate.map((data, index) => (
                          <div className="inner" key={index}>
                            <CourseSlider {...data} course={data.courseImg} />
                            {data.certificateThree.map(
                              (innerData, innerIndex) => (
                                <div className="content" key={innerIndex}>
                                  <h2 className="title">{innerData.title}</h2>
                                  <p>{innerData.desc}</p>
                                  <ul className="rbt-list-style-2 flex-wrap">
                                    {innerData.list.map((innerData, i) => (
                                      <li key={i}>
                                        <i className="feather-check"></i>
                                        {innerData.text}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-course-content rbt-section-gap bg-color-extra2">
        <div className="container">
          <div className="row align-items-end mb--60">
            <div className="col-lg-6 col-md-6">
              <div className="section-title text-start">
                <h2 className="title">Course Content</h2>
                <p className="description has-small-font-size mt--10">
                  32 sections • 376 lectures • 27h 8m total length
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="expend-button text-start text-md-end">
                <Link className="rbt-btn-link w-700" href="#">
                  Expand all sections<i className="feather-arrow-right"></i>
                </Link>
              </div>
            </div>
          </div>
          <div className="row gy-5 row--30">
            <div className="col-lg-6">
              <div className="feature-course-thumbnail">
                <div className="video-popup-wrapper rbt-shadow-box">
                  <Image
                    className="w-100 radius-10"
                    src={courseImg}
                    width={563}
                    height={428}
                    alt="Card image"
                  />
                  <Link
                    className="rbt-btn rounded-player-2 popup-video position-to-top with-animation btn-white-color"
                    data-vbtype="video"
                    controls
                    href="https://www.youtube.com/watch?v=nA1Aqp0sPQo"
                  >
                    <span className="play-icon"></span>
                  </Link>
                </div>
                <div className="enroll-btn mt--15">
                  <Link
                    className="rbt-btn btn-gradient hover-icon-reverse w-100 radius-round"
                    href="#"
                  >
                    <span className="icon-reverse-wrapper">
                      <span className="btn-text">Continue Course</span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                      <span className="btn-icon">
                        <i className="feather-arrow-right"></i>
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 rbt-scroll-max-height rbt-scroll">
              <div className="course-content">
                <div className="rbt-accordion-style rbt-accordion-02 right-no-padding accordion">
                  <div className="accordion" id="accordionExampleb2">
                    {SingleCourseData &&
                      SingleCourseData.courseContent.map((data, index) => (
                        <div className="accordion-item card" key={index}>
                          <h2
                            className="accordion-header card-header"
                            id={`headingTwo${index + 1}`}
                          >
                            <button
                              className={`accordion-button ${
                                data.isShow ? "" : "collapsed"
                              }`}
                              type="button"
                              data-bs-toggle="collapse"
                              data-bs-target={`#collapseTwo${index + 1}`}
                              aria-expanded={data.isShow}
                              aria-controls={`collapseTwo${index + 1}`}
                            >
                              {data.title}
                            </button>
                          </h2>
                          <div
                            id={`collapseTwo${index + 1}`}
                            className={`accordion-collapse collapse ${
                              data.isShow ? "show" : ""
                            }`}
                            aria-labelledby={`headingTwo${index + 1}`}
                            data-bs-parent="#accordionExampleb2"
                          >
                            <div className="accordion-body card-body">
                              <ul className="rbt-course-main-content liststyle">
                                {data.list.map((list, i) => (
                                  <li key={i}>
                                    <a href="#">
                                      <div className="course-content-left">
                                        <i
                                          className={`feather-${
                                            list.isPlay
                                              ? "play-circle"
                                              : "file-text"
                                          }`}
                                        ></i>
                                        <span className="text">
                                          {list.text}
                                        </span>
                                      </div>
                                      <div
                                        className={`course-content-right ${
                                          list.isLoc ? "only-lock" : ""
                                        }`}
                                      >
                                        {list.isLoc ? (
                                          <i className="feather-lock"></i>
                                        ) : (
                                          <>
                                            <span className="rbt-badge bg-pink-opacity">
                                              {list.min} min
                                            </span>
                                            <span className="rbt-badge bg-primary-opacity">
                                              Preview
                                            </span>
                                          </>
                                        )}
                                      </div>
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-testimonial-area bg-color-white rbt-section-gap overflow-hidden">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center">
                  <span className="subtitle bg-primary-opacity">
                    EDUCATION FOR EVERYONE
                  </span>
                  <h2 className="title">
                    People like histudy education. <br /> No joking - here’s the
                    proof!
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <TestimonialSeven />
      </div>

      <div className="rbt-pricing-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row g-5 mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <h2 className="title">Plans For This Course</h2>
                <p className="description mt--20">
                  See this our three main plans for our histudy courses. It
                  starts from here! You can teach yourself what you really like.
                </p>
              </div>
            </div>
          </div>
          <PricingFive />
        </div>
      </div>

      <div className="rbt-author-area bg-gradient-8 rbt-section-gap">
        <div className="container">
          <div className="rbt-instructor">
            <div className="single-course-author">
              {TeamData &&
                TeamData.team.slice(0, 1).map((data, index) => (
                  <div className="media row align-items-center g-5" key={index}>
                    <div className="col-lg-3 col-xl-3 offset-xl-2">
                      <div className="thumbnail">
                        <Link href="#">
                          <Image
                            className="radius-10 w-100"
                            src={data.img}
                            width={304}
                            height={308}
                            alt="Author Images"
                          />
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      {data.details.map((innerData, i) => (
                        <div className="media-body ml--15" key={i}>
                          <div className="author-info text-left">
                            <h2 className="title color-white mb--0">
                              {innerData.name}
                            </h2>
                            <span className="b3 color-white">
                              {innerData.type}
                            </span>
                          </div>
                          <div className="content mt--20">
                            <p className="description color-white">
                              {innerData.desc}
                            </p>
                            <ul className="social-icon color-white social-default transparent-with-border justify-content-start mt--15">
                              <li>
                                <Link href="https://www.facebook.com/">
                                  <i className="feather-facebook"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.twitter.com">
                                  <i className="feather-twitter"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.instagram.com/">
                                  <i className="feather-instagram"></i>
                                </Link>
                              </li>
                              <li>
                                <Link href="https://www.linkdin.com/">
                                  <i className="feather-linkedin"></i>
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>

      <div className="rbt-newsletter-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <NewsletterFour />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCourse;
