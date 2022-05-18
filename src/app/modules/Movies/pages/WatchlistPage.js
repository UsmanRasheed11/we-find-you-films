import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import * as actions from "../_redux/watchlist/watchlistActions";
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
    <div className="product">

      <img src={movie.src} alt="" />

      <div className="product-info col-6">

        <h3 className="product-name text-white">{movie.title}</h3>

        <p className="product-price">{movie.description}</p>

        {/* <h4 className="product-offer"></h4> */}

      </div>
      <div className="product-info">
      <p className="product-remove">

        <i className="fa fa-trash" aria-hidden="true"></i>

        <span className="remove mx-1">Remove</span>

      </p>
      </div>

    </div>
  );
}

export const WatchListPage = () => {
  const { currentState } = useSelector(
    (state) => ({ currentState: state.watchList }),
    shallowEqual
  );
  const { totalCount, entities, listLoading } = currentState;
  console.log(entities);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.getWatchList());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <section className="text-white">
      <div className="wrapper bgded overlay"
      // style={{ backgroundImage: "url(images/demo/bg2.jpeg)" }}
      >

        <main className="hoc container clear">
          <header className="heading"><u>Watchlist</u></header><br /><br />

          <div className="products">
            {movies.map(movie => (<WatchListMovieCard key={movie.id} movie={movie} />))}
          </div>

        </main>
      </div>
    </section>
  );
};
