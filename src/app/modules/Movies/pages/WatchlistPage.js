import React from "react";
import "../../../../_theme/layout/styles/layout.css";

const movies = [
  {
    id: 1,
    src: "images/demo/img/7.jpg",
    title: "movie: 1917",
    description: "917 is a 2019 British war film directed and produced by Sam Mendes ",
    time: "Apr,02",
  },
  {
    id: 2,
    src: "images/demo/img/2.jpeg",
    title: "movie: War",
    description: "Isaac Florentine is an Israeli film director. He is best known for his martial arts and action genre films ",
    time: "May,05",
  },
  {
    id: 3,
    src: "images/demo/img/5.jpg",
    title: "movie: Woriers",
    description: "Isaac Florentine is an Israeli film director. He is best known for his martial arts and action genre films ",
    time: "Apr,04",
  },
];

const WatchListMovieCard = ({ movie }) => {
  return (
    <>
      <div className="product">

        <img src={movie.src} alt="" />

        <div className="product-info">

          <h3 className="product-name">{movie.title}</h3>

          <p className="product-price">{movie.description}</p>

          {/* <h4 className="product-offer"></h4> */}

          <p className="product-remove">

            <i className="fa fa-trash" aria-hidden="true"></i>

            <span className="remove">Remove</span>

          </p>

        </div>

      </div>
    </>
  );
}

export const WatchListPage = () => {

  return (
    <>
      <div className="wrapper bgded overlay" style={{ backgroundImage: "url(images/demo/bg2.jpeg)" }}>

        <main className="hoc container clear">
          <header className="heading"><u>Watchlist</u></header><br /><br />

          <div className="products">
            {movies.map(movie => (<WatchListMovieCard key={movie.id} movie={movie} />))}
          </div>

        </main>
      </div>
    </>
  );
};
