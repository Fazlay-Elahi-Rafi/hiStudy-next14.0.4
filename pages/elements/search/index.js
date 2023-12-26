import Context from "@/context/Context";
import PageHead from "@/pages/Head";
import Store from "@/redux/store";
import { Provider } from "react-redux";

import BreadCrumb from "@/components/Common/BreadCrumb";
import Separator from "@/components/Common/Separator";
import FooterOne from "@/components/Footer/Footer-One";
import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import MobileMenu from "@/components/Header/MobileMenu";
import Search from "@/components/Search/Search";
import SearchThree from "@/components/Search/Search-Three";
import SearchTwo from "@/components/Search/Search-Two";

const SearchPage = () => {
  return (
    <>
      <PageHead title="Search - Online Courses & Education Bootstrap5 Template" />

      <Provider store={Store}>
        <Context>
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <BreadCrumb title="Search" text="Search" />

          <div className="rbt-elements-area bg-color-white rbt-section-gap">
            <Search />
          </div>

          <div className="rbt-elements-area bg-color-extra2 rbt-section-gap">
            <SearchTwo />
          </div>

          <div className="rbt-elements-area bg-color-darker rbt-section-gap">
            <SearchThree />
          </div>

          <MobileMenu />
          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default SearchPage;
