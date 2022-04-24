import React from "react";
import "../../../../_theme/layout/styles/layout.css";

const cinemas = [
  {
    id: 1,
    name: "Cinepax",
    address: "2nd floor, Giga Mall, WTC, GT Road, Sector F, DHA Phase II, Islamabad, Islamabad Capital Territory ",
    image: "images/demo/pax2.jpg",
  },
  {
    id: 2,
    name: "Cinepax",
    address: "4th Floor, Centaurus Mall, 1 Jinnah Avenue, F-8, Islamabad 46000,phone no: 051-111-626-384",
    image: "images/demo/cineplex.jpg",
  },
  {
    id: 3,
    name: "Cinegold",
    address: "Phase 7, Garden city, Bahria Town, Islamabad, Islamabad Capital Territory",
    image: "images/demo/g.jpg",
  },
  {
    id: 4,
    name: "The arena",
    address: "Directed by Marc Forster. With Brad Pitt, Mireille Enos, Daniella Kertesz, James Badge Dale. ",
    image: "images/demo/3.jpg",
  },
  {
    id: 5,
    name: "Cinepax, Jinnah Park",
    address: "Jinnah Park, Kachehri Road, Rawalpindi, 46000,phone no: 051-111-626-384 ",
    image: "images/demo/1.jpg",
  },
  {
    id: 6,
    name: "Odeon Cineplex",
    address: "Kohistan Tower, Main Mall Road, opposite AFIC Hospital, Rawalpindi Cantonment, Punjab, Pakistan ",
    image: "images/demo/2.jpg",
  },
]

const CinemaListCard = ({ cinema, first }) => {
  console.log(first)
  return (
      <li className={`one_third my-1 ${first?"first":""}`}>
        <article className="element">
          <figure><img src={cinema.image} alt={cinema.name} />
            <figcaption><a className="btn small" href={`/cinemas/${cinema.id}`}>View</a></figcaption>
          </figure>
          <h6 ><a href={`/cinemas/${cinema.id}`}>{cinema.name}</a></h6>
          <p>{cinema.address}</p>

        </article>
      </li>
  );
}

const CinemaSearchResultPage = ({ cinemas }) => {
  if (cinemas.length > 0) {
    return (
      <>
        <div className="wrapper row3">
          <main className="hoc container clear">

            <div className="center btmspace-50">
              <h2 className="heading" >Search Results!!!</h2>

            </div>
            <ul className="nospace group btmspace-50">
              {cinemas.map((cinema, index) => (<CinemaListCard key={cinema.id} cinema={cinema} first={(index%3 === 0)?true:false} />))}
            </ul>
            <p className="center nospace"><a className="btn" href="/cinemas">view more{">>"}</a></p>
            <div className="clear"></div>
          </main>
        </div>
      </>
    );
  }
  else {
    return (
      <>
        <div className="wrapper row3">
          <main className="hoc container clear">

            <div className="center btmspace-50">
              <h2 className="heading" >No Result Found!!!</h2>

            </div>
          </main>
        </div>
      </>
    )
  }
}

export const CinemaPage = () => {

  return (
    <>
      <div className="wrapper bgded overlay" style={{ backgroundImage: "url(images/cinema.jpg)" }}>
        <div id="pageintro" className="hoc clear">

          <article>
            <h2 className="heading">Find movies in cinema's in your area</h2>
            <p>Here you can find movies of your intrests and search out cenimas around you.you can find cinemas in your selected region</p>
            <form action="/action_page.php" className="containerr">
              <h1 className="cen">Watch in Cenima</h1><br />

              <label for="email" className="lab"><b>Select region</b></label><br />
              <select id="region" name="region" type="select">
                <option value="Islmabad">Islamabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
              </select>

              <label for="psw" className="lab"><b>select genre</b></label>
              <select id="region" name="region" type="select">
                <option value="Islmabad">Comedy</option>
                <option value="Rawalpindi">Action</option>
                <option value="Islmabad">Horror</option>
                <option value="Rawalpindi">Fiction</option>
                <option value="Islmabad">Rommance</option>
                <option value="Rawalpindi">Thriller</option>
              </select>


              <button type="submit" className="btnnn">Search</button>
            </form><br /><br /><br />
            <footer><a className="btn" href="/cinemas">Select multiple genres</a></footer><br />

          </article>

        </div>
      </div>
      <CinemaSearchResultPage cinemas={cinemas} />
    </>
  );
};
