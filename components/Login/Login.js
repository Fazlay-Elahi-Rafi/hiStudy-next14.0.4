import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <>
      <div className="col-lg-6">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Login</h3>
          <form className="max-width-auto">
            {/* <div className={`form-group ${isFocused ? "focused" : ""}`}> */}
            <div className="form-group">
              <input name="con_name" type="text" />
              <label>Username or email *</label>
              <span className="focus-border"></span>
            </div>
            <div className="form-group">
              <input name="con_email" type="email" />
              <label>Password *</label>
              <span className="focus-border"></span>
            </div>

            <div className="row mb--30">
              <div className="col-lg-6">
                <div className="rbt-checkbox">
                  <input type="checkbox" id="rememberme" name="rememberme" />
                  <label htmlFor="rememberme">Remember me</label>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="rbt-lost-password text-end">
                  <Link className="rbt-btn-link" href="#">
                    Lost your password?
                  </Link>
                </div>
              </div>
            </div>

            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Log In</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="col-lg-6">
        <div className="rbt-contact-form contact-form-style-1 max-width-auto">
          <h3 className="title">Register</h3>
          <form className="max-width-auto">
            <div className="form-group">
              <input name="register-email" type="text" />
              <label>Email address *</label>
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
              <input name="register_user" type="text" />
              <label>Username *</label>
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
              <input name="register_password" type="password" />
              <label>Password *</label>
              <span className="focus-border"></span>
            </div>

            <div className="form-group">
              <input name="register_conpassword" type="password" />
              <label>Confirm Password *</label>
              <span className="focus-border"></span>
            </div>

            <div className="form-submit-group">
              <button
                type="submit"
                className="rbt-btn btn-md btn-gradient hover-icon-reverse w-100"
              >
                <span className="icon-reverse-wrapper">
                  <span className="btn-text">Register</span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="feather-arrow-right"></i>
                  </span>
                </span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
