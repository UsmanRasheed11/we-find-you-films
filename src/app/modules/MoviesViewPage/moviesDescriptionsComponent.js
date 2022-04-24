import React from "react";
import { Rate } from "antd";
function MoviesDescriptionsComponent(props) {
  
  return (
    <div className="text-left mx-5 MoviesDescriptionsComponent text-white pb-3">
      <h2 className="text-white">{props?.title || "demo title"}</h2>
      <p>{props?.genres || "demo genres"}</p>

      <div>
        <Rate disabled defaultValue={props.imDbRating / 2 || 0} />
        <p>{props.imDbRating || 0}/10</p>
      </div>
      <h6>{props?.rating || 0}/10</h6>
      
      <p style={{marginTop:'-30px'}}>{props?.description || "demo description"}</p>
    </div>
  );
}

export default MoviesDescriptionsComponent;
