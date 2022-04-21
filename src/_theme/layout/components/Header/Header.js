import React from "react";

export const HeaderPage = () => {

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
      <form className="clear" method="post" action="#">
        <fieldset>
          <input type="search" defaultValue="" placeholder="Search Here&hellip;" />
          <button className="fa fa-search" type="submit" title="Search"><em>Search</em></button>
        </fieldset>
      </form>
    </div>
   
  </div>
</div>
  );
};
