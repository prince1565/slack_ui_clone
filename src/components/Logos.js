/** @format */

import React from "react";
import "../App.css";
import l1 from "../img/l1.png";
import l2 from "../img/l2.png";
import l3 from "../img/l3.png";
import l4 from "../img/l4.png";
import l5 from "../img/l5.png";
import l6 from "../img/l6.png";

export default function Logos() {
  return (
   

    <div class="col-sm-8 mx-auto ">
      <div class=" row row-cols-6 d-flex w-100">
        <div class="col col-4 col-md-3 col-lg-2 mx-auto"><center><img src={l1} className="p-0"/></center></div>
        <div class="col col-4 col-md-3 col-lg-1 mx-auto"><center><img src={l2} className="p-0"/></center></div>
        <div class="col col-4 col-md-3 col-lg-1 mx-auto"><center><img src={l3} className="p-0"/></center></div>
        <div class="col col-4 col-md-3 col-lg-1 mx-auto"><center><img src={l4} className="p-0"/></center></div>
        <div class="col col-4 col-md-3 col-lg-2 mx-auto"><center><img src={l5} className="p-0"/></center></div>
        <div class="col col-4 col-md-3 col-lg-1 mx-auto"><center><img src={l6} className="p-0"/></center></div>
      </div>

      
    </div>
  );
}
{
  /* <div className="container">
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
    </div> */
}
