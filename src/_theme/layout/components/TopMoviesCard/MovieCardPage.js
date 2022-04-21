import React from "react";
import "../../styles/layout.css";

export const MovieCardPage = ({first, movie, text}) => {

  return (
      <li className={`one_third ${first?"first":""}`}>
        <article className="element">
          <figure><img src={movie.src} alt={movie.title} />
            <figcaption><a className="btn small" href={`/movies/${movie.id}`}>{text}</a></figcaption>
          </figure>
          <div className="excerpt">
            <time dateTime="2045-04-04T08:15+00:00" data-title="April"><strong>{movie.time.split(",")[0]}</strong> <em>{movie.time.split(",")[1]}</em></time>
            <h6 className="heading"><a href="/">{movie.title}</a></h6>
            <p>{movie.description}</p>
          </div>
        </article>
      </li>
  );
};