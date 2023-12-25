import MobileMenu from "@/components/Header/MobileMenu";
import PageHead from "../Head";
// import HeaderStyleEight from "@/components/Header/HeaderStyle-Eight";
import Kindergarten from "@/components/04-kindergarten/04-kindergarten";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import Context from "@/context/Context";
import Cart from "@/components/Header/Offcanvas/Cart";
import FooterOne from "@/components/Footer/Footer-One";

const Home = () => {
  return (
    <>
      <PageHead title="Kindergarten - Online Courses & Education Bootstrap5 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          {/* <HeaderStyleEight headerSticky="rbt-sticky" headerType="" /> */}
          <Kindergarten />
          <Cart />

          {/* <Separator /> */}
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default Home;
