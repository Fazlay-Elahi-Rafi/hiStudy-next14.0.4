import Head from "next/head";

import HeaderStyleTen from "@/components/Header/HeaderStyle-Ten";
import FooterOne from "@/components/Footer/Footer-One";
import Separator from "@/components/Common/Separator";
import MainDemo from "@/components/01-Main-Demo/01-Main-Demo";
import MobileMenu from "@/components/Header/MobileMenu";
import Cart from "@/components/Header/Offcanvas/Cart";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";

const MainDemoLayout = () => {
  return (
    <>
      <Head>
        <title>Home - Online Courses & Education Bootstrap5 Template</title>
        <meta name="description" content="Home Page Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyleTen headerSticky="rbt-sticky" headerType="" />
          <MainDemo />
          <Cart />

          <Separator />
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default MainDemoLayout;
