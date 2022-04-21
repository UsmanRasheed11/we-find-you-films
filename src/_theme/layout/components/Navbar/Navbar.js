import React from "react";

export const NavbarPage = () => {

  return (
    <div className="wrapper row1">
  <header id="header" className="hoc clear"> 
   
    <div id="logo" className="fl_left">
      <h1><a href="/">findyourfilms</a></h1>
     
    </div>

    <nav id="mainav" className="fl_right">
      <ul className="clear">
        <li className="active"><a href="/">Home</a></li>
        <li><a className="drop" href="pages/gallery.html">Movies</a>
          
        </li>
        <li><a className="drop" href="#">Top genre</a><ul>
          <li className="active"><a href="pages/action.html">Action</a></li>
          <li><a href="pages/comedy.html">comedy</a></li>
          <li><a href="pages/comedy.html">Thriller</a></li>
          <li><a href="pages/comedy.html">Adventure</a></li>
          <li><a href="pages/comedy.html">Rommantic</a></li>
          <li><a href="pages/comedy.html">fantacy</a></li>
          <li><a href="pages/comedy.html">Horror</a></li>
          <li><a href="pages/comedy.html">Crime</a></li>
          <li><a href="pages/comedy.html">Science fiction</a></li></ul>
        </li>
        <li><a href="pages/watchlist.html">Watchlist</a></li>
        <li><a href="pages/cenima.html">Watch in cenima</a></li>
      </ul>
    </nav>
    

  </header>
</div>
  );
};
