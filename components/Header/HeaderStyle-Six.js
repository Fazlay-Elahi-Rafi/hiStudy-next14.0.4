import React from "react";
import HeaderSix from "./Headers/Header-Six";

const HeaderStyleSix = () => {
  return (
    <>
      <header className="rbt-header rbt-header-default">
        <div className="rbt-sticky-placeholder"></div>

        <HeaderSix
          sticky="bg-color-white header-sticky"
          gapSpaceBetween=""
          navigationEnd="rbt-navigation-center"
          btnClass="rbt-switch-btn btn-gradient btn-sm hover-transform-none"
          btnText="Join Now"
        />
      </header>
    </>
  );
};

export default HeaderStyleSix;
