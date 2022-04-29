import React from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { shallowEqual, useSelector } from "react-redux";
import { Formik } from "formik";

export const HeaderPage = () => {

  const formHandleSubmit = async (values, navigate) => {
    navigate(`/TopMoviesMainPage?search=${values.search}`);
    // const res = await axios.get(`https://imdb-api.com/API/AdvancedSearch/k_sblaz5wr?title=${values.search}`)
    // console.log(res)
  }
  const navigate = useNavigate();
  const { isAuthorized, user } = useSelector(
    ({ auth }) => ({
      isAuthorized: auth.user != null,
      user: auth.user,
    }),
    shallowEqual
  );

  return (
    <div className="wrapper row0">
      <div id="topbar" className="hoc clear">

        <div className="fl_left">
          <ul className="nospace inline pushright">
            {!isAuthorized ? <>
              <li><i className="bi bi-box-arrow-in-right"></i> <a href="/auth/login">Login</a></li>
              <li><i className="fa fa-user"></i> <a href="/auth/register">Register</a></li>
            </> : <div className="d-flex"><li style={{ textTransform: "lowercase" }} className="text-dark"> <span className="mx-2">Logged In as: </span><span className="text-primary">{(user?.Email)}</span></li><li><Link to="/logout" title="SignOut" style={{ fontSize: "1.2rem" }} className="bi bi-box-arrow-right text-danger d-flex">
            </Link></li></div>}
          </ul>
        </div>
        <div className="fl_right">
          <Formik initialValues={{ search: "" }} onSubmit={(values) => formHandleSubmit(values, navigate)}>
            {({ values, handleSubmit, setFieldValue }) => (
              <form className="clear" onSubmit={handleSubmit}>
                <fieldset className="d-flex h-100 border border-1 border-light">
                  <input type="search" name="search" onChange={(e) => setFieldValue("search", e.target.value)} defaultValue={values.search} placeholder="Search Here&hellip;" />
                  <button className="my-auto" style={{ fontSize: "0.5rem", color: "#bd1212", minHeight: "36px", minWidth: "30px", maxWidth: "35px", borderLeft: "1px solid #272421", backgroundColor: "#4B4641" }} type="submit" title="Search"><i style={{ fontSize: "1rem" }} className="fa fa-search"></i></button>
                </fieldset>
              </form>
            )}
          </Formik>
        </div>

      </div>
    </div>
  );
};
