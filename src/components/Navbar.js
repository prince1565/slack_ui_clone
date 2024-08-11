import React from 'react'
import logo from '../img/slacklogo.png';
import Btn1 from './Btn1';
import Btn2 from './Btn2';
export default function Navbar() {
  return (
    <div className='col-sm-12'>
       <nav className="navbar navbar-expand-lg fixed-top mx-0">
        <div className="container">
          {/* logo  */}
          <a className="navbar-brand" href="#">
            <img src={logo} className='logo mx-auto ms-0'/>
          </a>
          {/* <!-- toggel Button --> */}
          <button className="navbar-toggler shadow-none bg-white border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <!-- side bar --> */}
          <div className=" offcanvas offcanvas-end pt-3" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            {/* <!-- sidebar Header --> */}
            <div className="offcanvas-header">
              <img  src ={logo}className="offcanvas-title logo" id="offcanvasNavbarLabel" />
              <button type="button" className="btn-close border-0 shadow-none bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            {/* <!-- SideBar Body --> */}
            <div className="offcanvas-body ">
              <ul className="navbar-nav  align-item-center flex-grow-1 pt-2">
                <li className="nav-item   fw-bold ">
                  <a className="nav-link active  menu text-start " aria-current="page" href="#"><small>Features</small></a>
                </li>
                <li className="nav-item  fw-bold ">
                  <a className="nav-link active  menu  text-start " href="#"><small>Solutions</small></a>
                </li>
                <li className="nav-item  fw-bold">
                  <a className="nav-link active  menu text-start" href="#"><small>Enterprise</small></a>
                </li>
                <li className="nav-item  fw-bold ">
                  <a className="nav-link active   menu text-start " href="#"><small>Resource</small></a>
                </li>
                <li className="nav-item   fw-bold">
                  <a className="nav-link active  menu text-start " href="#"><small>Pricing</small></a>
                </li>
              </ul>
            

              <div className="col-sm-1 mx-auto ps-5">
            <ul className="navbar-nav  align-item-center flex-grow-1 pt-2">
                
                </ul> 
                </div>
            
            


              <div className="col-sm-12 col-lg-5">
              <ul className="navbar-nav justify-content-center align-item-center flex-grow-1   center">
              <li className="nav-item fw-bold pt-2 mt-1 search">
                <i class="fa fa fa-search nav-link"></i>
                </li> 
                <li className="nav-item   fw-bold">
                  <a className="nav-link active  menu text-start sign_in" href="#"><small>Sign in</small></a>
                </li>
                  <li className="nav-item nav-link button1 text-start btn_first">
                    <Btn1 btnname="TALK TO SAELS"/>
                </li>
                <li className="nav-item nav-link button text-start">
                    <Btn2 btnname="GET STARTED"  pady="2"/>
                </li>
                </ul>
             </div>



            </div>
          </div>
        </div>
      </nav> 
        
    </div>
  )
}
