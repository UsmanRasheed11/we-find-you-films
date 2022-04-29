import React from "react";
import { RecommendedLandPage } from "../modules/RecommendedMovies/pages/RecommendedLandPage";
import { TopMoviesLandPage } from "../modules/Movies/pages/TopMoviesLandPage";
import { CinemaLandPage } from "../modules/Cinema/pages/CinemaLandPage";
import "../../_theme/layout/styles/layout.css";

export const LandingPage = () => {

  return (
  <>
  <div className="wrapper bgded overlay" style={{backgroundImage:"url('images/demo/backgrounds/bg1.jpg')"}}>
  <div id="pageintro" className="hoc clear"> 
    
    <article>
      <h2 className="heading">Find movies of your intrest</h2>
      <p>Here you can find movies of your intrests and search out cenimas around you. We will recommend you movies of your intrest in cenimas also.</p>
     
      <footer><a className="btn" href="/">Select multiple genres</a></footer><br />
      
    </article>
    
  </div>
</div>
<div className="wrapper row3">
  <main className="hoc container clear"> 
  <TopMoviesLandPage />
  <RecommendedLandPage />
  </main>
  </div>
  <CinemaLandPage />
  {/* <div className="wrapper row3">
  <section className="hoc container clear"> 
    <div className="group">
      <div className="one_third first btmspace-30">
      </div>
      <article className="one_third btmspace-30">
        
      </article>
     
      
    </div>
  </section>
</div> */}
  </>
  );
};
