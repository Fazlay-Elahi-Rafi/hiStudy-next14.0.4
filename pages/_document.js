import { Html, Head, Main, NextScript } from "next/document";

import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="rbt-header-sticky">
        <Provider store={Store}>
            {/* <Cart /> */}
            <Main />
            <NextScript />
          {/* <BackToTop /> */}
        </Provider>
      </body>
    </Html>
  );
}
