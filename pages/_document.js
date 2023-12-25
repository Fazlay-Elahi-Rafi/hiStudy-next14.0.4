import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="rbt-header-sticky">
        {/* <Provider store={Store}> */}
          {/* <Context> */}
            {/* <Cart /> */}
            <Main />
            <NextScript />
          {/* </Context> */}
          {/* <BackToTop /> */}
        {/* </Provider> */}
      </body>
    </Html>
  );
}
