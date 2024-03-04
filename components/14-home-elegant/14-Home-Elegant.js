import React from "react";
import HomeElegantBanner from "./HomeElegantBanner";
import CardSix from "../Cards/Card-Six";

const HomeElegant = () => {
  return (
    <>
      <div className="rbt-banner-area rbt-banner-8 variation-02 with-shape">
        <HomeElegantBanner />
      </div>
      <div className="rbt-courses-area rbt-section-gapBottom bg-color-white mt_dec--100 mt_md_dec--30 mt_sm_dec--30">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1 mt_dec--50">
              <CardSix />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeElegant;
