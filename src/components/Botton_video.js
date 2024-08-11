/** @format */

import React from "react";
import Videos_text from "./Videos_text";

export default function Botton_video(props) {
  return (
    <div className="col-sm-12 d-flex parent">
      <div>
        <div class="col-sm-12 col-lg-6 child">
            <Videos_text video={props.videoname} borderr="rounded-end-pill"/>
        </div>
        <div class="col-sm-12 col-lg-6 child px-5 ">
            <p className=" fs-3 gapline fst-italic">‘Many technology employees were gravitating naturally to Slack. So we followed our users to what has become one of our most important tools.’</p>
            <p className="fw-bold">Matt Beal</p>
            <p className="fw-semibold">Director of Technology Strategy and Architecture, Vodafone</p>
            <a href="#" className="card-link bd text-info-emphasis">
          <b>Learn more about the Slack platform &#8594;</b>
          </a>
        </div>
      </div>
    </div>
  );
}
