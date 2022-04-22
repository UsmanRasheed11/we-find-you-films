import axios from "axios";
import React, { useEffect, useState } from "react";
import MOviesCastComponent from "./moviesCastComponent";
import MoviesDescriptionsComponent from "./moviesDescriptionsComponent";
import MoviesPosterComponent from "./moviesPosterComponent";
import "./moviesviewpage.css";
import MovieViewComponent from "./movieViewComponent";
// import { Rate } from 'antd';
function MoviesViewPage(props) {

  const [movieId, setMovieId] = useState(null);
  const [movieData, setmovieData] = useState(null);

  // //using UseEffect to get Movie Id from URL
  // useEffect(() => {
  //   const currentURL = window.location.href;
  //   console.log(currentURL);
  //   var id = currentURL.split("/").pop().trim();
  //   console.log(id);
  //   setMovieId(id);
  //   //fetching data by api call
  //   axios.get(`https://imdb-api.com/en/API/Title/k_sblaz5wr/${id || 'tt1375666'}/Images,Trailer,Ratings,`).then((response)=>{
  //     console.log("res",response?.data)
  //     if(response?.data){
  //       setmovieData(response?.data)
  //     }
  // }).catch((error)=>{
  //     console.log("error",error)
  // })
  // }, []);

  return (
    <>
      {/************   main section of preview *********/}
      <MovieViewComponent 
      Id={movieId}
       title={movieData?.fullTitle || null}
        image={movieData?.image || null}
        description={movieData?.plot || null}
        tagline={movieData?.tagline || null}
      
      />
      {/************  poster images *********/}
      <MoviesPosterComponent Id={movieId} posters={movieData? movieData?.images?.items : null} />
      {/************   Description Section *********/}
      <MoviesDescriptionsComponent
      title={movieData?.fullTitle || null}
      description={movieData?.plot || null}
      rating={movieData?.imDbRating || null}
      genres={movieData?.genres || null}
      />
      {/************   Crew Section *********/}
      <MOviesCastComponent  
      // Id={movieId} actors={movieData?.actorList || null}
      
      />
    </>
  );
}

export default MoviesViewPage;
