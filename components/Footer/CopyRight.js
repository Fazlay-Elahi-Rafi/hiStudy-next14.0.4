import Link from "next/link";
import Separator from "../Common/Separator";

const CopyRight = () => {
  return (
    <>
      <Separator />
      <div className="copyright-area copyright-style-1 ptb--20">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <p className="rbt-link-hover text-center text-lg-start">
                Copyright © 2023
                <Link href="https://themeforest.net/user/rbt-themes">
                  Rainbow-Themes.
                </Link>
                All Rights Reserved
              </p>
            </div>
            <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12 col-12">
              <ul className="copyright-link rbt-link-hover justify-content-center justify-content-lg-end mt_sm--10 mt_md--10">
                <li>
                  <Link href="#">Terms of service</Link>
                </li>
                <li>
                  <Link href="privacy-policy.html">Privacy policy</Link>
                </li>
                <li>
                  <Link href="subscription.html">Subscription</Link>
                </li>
                <li>
                  <Link href="login.html">Login & Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CopyRight;