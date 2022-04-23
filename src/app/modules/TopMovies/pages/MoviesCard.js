import React from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";
function MoviesCard(props) {
  return (
    // main container of Card
    <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 p-0 moviecontainer">
      {/* link forredirecting to next main page */}
      <Link to={`/movie/${props.movies.id || "demo"}`}>
        {/* hover display div area */}
        <div class="hovermiddle">
          <div class="text">Go To Movie</div>
        </div>
        {/* *********  Movie Card Started Here ******* */}
        <div class="movie-card">
           {/* *********  image of card ******* */}
          <img
            class="img-fluid movie-img"
            // src={props.movies.image || "https://image.tmdb.org/t/p/w500/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg"}
            src={
              "https://image.tmdb.org/t/p/w500/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg"
            }
            alt="Sorry, something went wrong"
          />
          {/* *********  block of card ******* */}
          <div class="movie-description p-3">
            {/* *********  title / rating of card ******* */}
            <div class=" d-flex justify-content-between text-white align-items-center orangetext  ">
              <h2 class="movie-title text-left orangetext">
                <h5 className="orangetext">
                  {props.movies.title || "demo title"}
                </h5>
                <p className="text-left">
                  <Rate
                    disabled
                    defaultValue={props.movies.imDbRating / 2 || 0}
                  />
                </p>
              </h2>
              <h3 class="movie-vote bgred text-white">
                {props.movies.imDbRating || 0.0}
              </h3>
            </div>
             {/* *********  description of card ******* */}
            <p className="text-left" style={{ marginTop: "-20px" }}>
              {props.movies.crew || "demo crew"}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default MoviesCard;
