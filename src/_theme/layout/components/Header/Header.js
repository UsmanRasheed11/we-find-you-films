import React from "react";
import { useNavigate } from "react-router"
import { Formik } from "formik";

export const HeaderPage = () => {

  const formHandleSubmit = async (values,navigate) => {
    navigate(`/TopMoviesMainPage?search=${values.search}`);
    // const res = await axios.get(`https://imdb-api.com/API/AdvancedSearch/k_sblaz5wr?title=${values.search}`)
    // console.log(res)
  }
  const navigate = useNavigate();

  return (
<div className="wrapper row0">
  <div id="topbar" className="hoc clear"> 
    
    <div className="fl_left">
      <ul className="nospace inline pushright">
        <li><i className="fa fa-sign-in"></i> <a href="/auth/login">Login</a></li>
        <li><i className="fa fa-user"></i> <a href="/auth/register">Register</a></li>
      </ul>
    </div>
    <div className="fl_right">
      <Formik initialValues={{search: ""}} onSubmit={(values)=>formHandleSubmit(values,navigate)}>
      {({values, handleSubmit, setFieldValue}) => (
        <form className="clear" onSubmit={handleSubmit}>
        <fieldset className="d-flex h-100 border border-1 border-light">
          <input type="search" name="search" onChange={(e) => setFieldValue("search",e.target.value) } defaultValue={values.search} placeholder="Search Here&hellip;" />
          <button className="fa fa-search" type="submit" title="Search"><em>Search</em></button>
        </fieldset>
        </form>
      )}
      </Formik>
    </div>
   
  </div>
</div>
  );
};
