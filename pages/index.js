import Head from "next/head";
import MainDemoLayout from "./(01-main-demo)/layout";
import BackToTop from "./backToTop";

import Context from "@/context/Context";
import Store from "@/redux/store";
import { Provider } from "react-redux";
// import Cart from "@/components/Header/Offcanvas/Cart";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <main className="">
        <Provider store={Store}>
          <Context>
            {/* <Cart /> */}
            <MainDemoLayout />
            <BackToTop />
          </Context>
        </Provider>
      </main>
    </>
  );
}
