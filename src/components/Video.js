/** @format */

import React from "react";
import v1 from "../img/v1.webm";
export default function Video(props) {
  const videourl=props.videourl;
  return (
    <div className="col-sm-8 mx-auto ">
      <video loop muted autoPlay controls = '' >
        <source src={props.videourl} type="video/webm"/>
      </video>
    </div>
  );
}
