"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const CourseMenu = () => {
  const [currentSection, setCurrentSection] = useState("#overview");

  useEffect(() => {
    const handleScroll = () => {
      const sectionOffsets = {
        "#overview": document.getElementById("overview").offsetTop,
        "#coursecontent": document.getElementById("coursecontent").offsetTop,
        "#details": document.getElementById("details").offsetTop,
        "#intructor": document.getElementById("intructor").offsetTop,
        "#review": document.getElementById("review").offsetTop,
      };

      const scrollPosition = window.scrollY + 180;

      for (const [section, offset] of Object.entries(sectionOffsets)) {
        if (scrollPosition >= offset) {
          setCurrentSection(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav className="mainmenu-nav onepagenav">
        <ul className="mainmenu">
          <li className={currentSection === "#overview" ? "current" : ""}>
            <Link href="#overview">Overview</Link>
          </li>
          <li className={currentSection === "#coursecontent" ? "current" : ""}>
            <Link href="#coursecontent">Course Content</Link>
          </li>
          <li className={currentSection === "#details" ? "current" : ""}>
            <Link href="#details">Details</Link>
          </li>
          <li className={currentSection === "#intructor" ? "current" : ""}>
            <Link href="#intructor">Instructor</Link>
          </li>
          <li className={currentSection === "#review" ? "current" : ""}>
            <Link href="#review">Review</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default CourseMenu;
