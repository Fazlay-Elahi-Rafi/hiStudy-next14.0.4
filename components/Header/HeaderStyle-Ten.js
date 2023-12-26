import HeaderTopEight from "./Header-Top/HeaderTop-Eight";
import HeaderEight from "./Headers/Header-Eight";

const HeaderStyleTen = ({ headerSticky }) => {
  console.log(headerSticky);
  return (
    <>
      <header className="rbt-header rbt-header-10">
        <HeaderTopEight
          bgColor="bg-not-transparent bg-color-darker"
          gapSpaceBetween="header-space-betwween"
          container="container-fluid"
          flexDirection=""
          btnClass="rbt-switch-btn btn-gradient btn-xs"
          btnText="Call us now"
        />
        <HeaderEight
          headerSticky={headerSticky}
          sticky="header-sticky"
          container="container-fluid"
          gapSpaceBetween="header-space-betwween"
          navigationEnd="rbt-navigation-start"
        />
      </header>
    </>
  );
};
export default HeaderStyleTen;
