import React from "react";
import Image from "next/image";
import CallToActionFive from "../Call-To-Action/CallToAction-Five";
import BlogGridTop from "../Blogs/Blog-Sections/BlogGrid-Top";

import BlogData from "../../data/blog/blog.json";
import EventData from "../../data/events.json";

import shapeImg from "../../public/images/icons/three-shape.png";
import Link from "next/link";
import TestimonialTwo from "../Testimonials/Testimonial-Two";
import TeamTen from "../Team/TeamTen";
import Events from "../Events/Events";
import ServiceTen from "../Services/Service-Ten";

const OnlineSchool = () => {
  return (
    <>
      <div className="rbt-service-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">
                  Exam Preparation
                </span>
                <h2 className="title">Annual Exam Preparation</h2>
              </div>
            </div>
          </div>
          <ServiceTen />
        </div>
      </div>

      <div className="rbt-course-area bg-color-extra2 rbt-section-gap">
        <div className="container">
          <div className="row mb--60">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <span className="subtitle bg-secondary-opacity">Courses</span>
                <h2 className="title">Histudy All Courses</h2>
              </div>
            </div>
          </div>
          <h2>add korte hobe</h2>
          {/* @@include('course/course-6.html') */}
        </div>
      </div>

      <div className="rbt-events-area bg-color-white rbt-section-gap">
        <div className="container">
          <div className="row mb--60 g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <span className="subtitle bg-primary-opacity">Our Events</span>
                <h2 className="title">Histudy Events</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="read-more-btn text-start text-md-end">
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse radius-round"
                  href="#"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">VIEW ALL EVENTS</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <Events
            start={0}
            end={4}
            isPagination={false}
            parentClass="card-list-2 event-list-card"
            childClass="col-lg-6 col-md-6 col-12"
            getEvents={EventData}
          />
          {/* @@include('event/event-list.html') */}
        </div>
      </div>

      <div className="rbt-team-area bg-gradient-8 rbt-section-gap">
        <TeamTen />
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
        <TestimonialTwo />
      </div>

      <div className="rbt-rbt-blog-area bg-color-white rbt-section-gapBottom">
        <div className="container">
          <div className="row mb--30 g-5 align-items-end">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="section-title text-start">
                <span className="subtitle bg-primary-opacity">Our Blog</span>
                <h2 className="title">Histudy Blog</h2>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="read-more-btn text-start text-md-end">
                <Link
                  className="rbt-btn btn-gradient hover-icon-reverse radius-round"
                  href="blog"
                >
                  <div className="icon-reverse-wrapper">
                    <span className="btn-text">VIEW ALL POST</span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                    <span className="btn-icon">
                      <i className="feather-arrow-right"></i>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <BlogGridTop BlogData={BlogData} />
        </div>
      </div>
      <div className="rbt-call-to-action-area rbt-section-gap bg-gradient-6 rbt-call-to-action-5">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <CallToActionFive />
              </div>
            </div>
          </div>
        </div>
        <div className="shape-images">
          <Image src={shapeImg} width={547} height={398} alt="Shape Images" />
        </div>
      </div>
    </>
  );
};

export default OnlineSchool;
