import React, { useState, useEffect } from "react";
import { CloseOutlined } from "@ant-design/icons";
import {Scraping} from '../../../Api/Api'
function MovieViewComponent(props) {
  const [TrailerURL, SetTrailerURL] = useState(null);



  useEffect(()=>{
    movieUrlHandler()
   
  },[])

  const movieUrlHandler = async()=>{
    console.log("trailer url",props.trailer)
    // const url = 'https://www.imdb.com/video/imdb/vi2333017881/imdb/embed'
    const responce = await Scraping.ScrapingHandler({url:props.trailer})
    console.log("responce",responce.data)
    if(responce.data.success){
      console.log(responce.data.url[1].videoUrl)
      SetTrailerURL(responce.data.url[1].videoUrl)
    }

  }
  //main View
  return (
    <>
      {props.isVedioPlayer ? (
        <>
          {/************   vedioPlayer *********/}
          <div
            className=" closebuttononVedio p-3"
            onClick={props.HandlerPlayTriler}
          >
            <CloseOutlined />
          </div>
          <video width="100%" controls>
            <source
              src={TrailerURL|| "https://media.w3.org/2010/05/sintel/trailer.mp4"}
              // type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </>
      ) : (
        <>
          {/************   main section of preview *********/}
          <main className="mt-4 " 
          // onClick={props.HandlerPlayTriler}
          >
            <section id="featured">
              <div
                className="background"
                style={{
                  background: `url(${
                    props.image ||
                    "https://image.tmdb.org/t/p/w500/aq4Pwv5Xeuvj6HZKtxyd23e6bE9.jpg"
                  }) `,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  opacity: "0.4",
                }}
              ></div>
              <div className="content-info">
                <div className="content-title text-white text-left">
                  {props.title || "Demo Name"}
                </div>

                <div className="content-description text-left text-white text-left">
                  {props.tagline || "demo description"}
                </div>
                <div className="content-description text-left">
                  {/* <Rate disabled defaultValue={2} /> 4/10 */}
                </div>
                {/* <div className="row ">
                  <div className="col-6 d-flex ">
                    <div>
                      <button
                        className="play"
                        onClick={() => console.log("hello")}
                      >
                        <i className="fas fa-play"></i> Play
                      </button>
                    </div>
                    <div>
                      {" "}
                      <button className="info" onClick={() => console.log("hello")}>
                        <i className="fas fa-plus-circle"></i> Add to WatchList
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}

export default MovieViewComponent;
