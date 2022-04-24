import React from "react";
import { MovieCardPage } from "../../../../_theme/layout/components/TopMoviesCard/MovieCardPage";

const movies = [
  {
    id: 1,
    src: "images/demo/poster1.jpg",
    title: "World War Z",
    description: "Directed by Marc Forster. With Brad Pitt, Mireille Enos, Daniella Kertesz, James Badge Dale.",
    time: "Apr,02",
  },
  {
    id: 2,
    src: "images/demo/poster2.jpg",
    title: "Iron Man 3",
    description: "Iron Man, produced by Marvel Studios and distributed by Walt Disney",
    time: "May,05",
  },
  {
    id: 3,
    src: "images/demo/poster4.jpg",
    title: "Epic 3D",
    description: "Directed by Chris Wedge. With Blake Anderson, Aziz Ansari, Allison Bills",
    time: "Apr,04",
  },
]

export const TopMoviesLandPage = () => {

  return (
    <>
      <div className="center btmspace-50">
        <h2 className="heading" >Top movies{">>"}</h2>

      </div>
      <ul className="nospace group btmspace-50">
        {movies.map((movie, index) => (
          <MovieCardPage key={movie.id} text={"View"} first={(index%3 === 0) ? true : false} movie={movie} />
        ))}
      </ul>
      <p className="center nospace"><a className="btn" href="pages/gallery.html">view more{">>"}</a></p><b><br /></b>
    </>
  );
};
