import React from "react";
import "../../../../_theme/css/style.css";
import "../../../../_theme/css/bootstrap.min.css";
import "../../../../_theme/fonts/icomoon/style.css";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <>
      <div className="d-lg-flex half">
        <div className="bg order-1 order-md-2" style={{backgroundImage: "url(/images/cinema.jpg)"}}></div>
        <div className="contents order-2 order-md-1">

          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <h3>Login to <strong >findyourfilms</strong></h3>
                <br />
                <form action="#" method="post">
                  <div className="form-group first">
                    <label htmlFor="username" id="label">Username</label>
                    <input type="text" className="form-control" placeholder="enter your email" id="username" />
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="password" id="label">Password</label>
                    <input type="password" className="form-control" placeholder="enter your Password" id="password" />
                  </div>

                  <div className="d-flex mb-5 align-items-center">
                    <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                      <input type="checkbox" defaultChecked />
                      <div className="control__indicator"></div>
                    </label>
                    <span className="ml-auto"><a href="/" className="forgot-pass">Forgot Password</a></span>
                  </div>

                  <input type="submit" value="Log In" className="btn btn-block btn-primary" id="btn" /><h5><center>or</center></h5>
                  <Link to="/auth/register"><input type="button" value="Create account" className="btn btn-block btn-primary" id="btn2" /></Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}