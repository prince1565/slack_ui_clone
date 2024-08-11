/** @format */

import React from "react";
import Btn2 from "./Btn2";

export default function Card_message() {
  return (
    <div className="container">
      <div className="col-sm-12 mx-auto mt-5 list">
        <div>
          <div className="card-body">
            <h1><b>Made for people. </b><span className="text-primary" >Built for productivity.</span></h1>
          </div>
          
          <center className="mt-4"><Btn2 btnname="GET STARTED" className="btnsize" padx="4" pady="3"/></center>
          <div className="card-body">
            <center><p><b>Slack is free to try</b><span> for as long as you like</span></p></center>
          </div>
        </div>
      </div>
    </div>
  );
}
