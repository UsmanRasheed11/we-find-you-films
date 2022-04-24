import React from "react";
import "../../../../_theme/layout/styles/layout.css";

export const CinemaDetailsPage = () => {

  return (
    <>
      <div className="clear"></div>
      <div className="wrapper bgded overlay" style={{backgroundImage: "url(/images/demo/bg2.jpeg)"}}>
        <div className="w3-row w3-padding-64" id="about">
          <div className="w3-col m6 w3-padding-large">
            <br /><br /><img src="/images/demo/cineplex.jpg" className="w3-round w3-image w3-opacity-min" alt="Table Setting" width="600" height="750" />
          </div>
          <br /><br />
          <div className="w3-col m6 w3-padding-large">
            <h1 className="heading">Cineplex</h1><br />

            <p className="w3-large">4th Floor, Centaurus Mall, 1 Jinnah Avenue, F-8, Islamabad  46000,phone no: 051-111-626-384e</p>
            <p className="w3-large w3-text-grey w3-hide-medium">"Storm" is a particularly European approach to the issue, a Danish film overall, but a multi-culti multi-country production that fits its subject perfectly..</p>
            <footer><a className="btn" href="#">add to watchlist +</a></footer><br />
          </div>

          <ul><br /><br />

            <li className="one_quarter first"> <div className="movie-list-item">
              <img className="movie-list-item-img" src="/images/demo/img/13.jpg" alt="" />


              <button className="movie-list-item-button">view  </button></div>
            </li>
            <li className="one_quarter "><div className="movie-list-item">
              <img className="movie-list-item-img" src="/images/demo/img/16.jpg" alt="" />

              <button className="movie-list-item-button">view </button></div></li>
            <li className="one_quarter "> <div className="movie-list-item">
              <img className="movie-list-item-img" src="/images/demo/img/19.jpg" alt="" />

              <button className="movie-list-item-button">view </button></div>
            </li>
            <li className="one_quarter "><div className="movie-list-item">
              <img className="movie-list-item-img" src="/images/demo/img/14.jpg" alt="" />

              <button className="movie-list-item-button">view </button></div></li>
          </ul>
        </div>
      </div>
    </>
  );
};
