import React from 'react'
import cd1 from '../img/cd1.png'
import cd2 from '../img/cd2.jpg'
import cd3 from '../img/cd3.jpg'
import cd4 from '../img/cd4.jpg'
import $ from 'jquery'
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react'
import * as bootstrap from 'bootstrap';

export default function Card_caursel() {

useEffect(() => {
    var multipleCardCarousel = document.querySelector(
        "#carouselExampleControls"
      );
      if (window.matchMedia("(min-width: 769px)").matches) {
        var carousel = new bootstrap.Carousel(multipleCardCarousel, {
          interval: false,
        });
        var carouselWidth = $(".carousel-inner")[0].scrollWidth;
        var cardWidth = $(".carousel-item").width();
        var scrollPosition = 0;
        $("#carouselExampleControls .carousel-control-next").on("click", function () {
          if (scrollPosition < carouselWidth - cardWidth * 4) {
            scrollPosition += cardWidth;
            $("#carouselExampleControls .carousel-inner").animate(
              { scrollLeft: scrollPosition },
              600
            );
          }
        });
        $("#carouselExampleControls .carousel-control-prev").on("click", function () {
          if (scrollPosition > 0) {
            scrollPosition -= cardWidth;
            $("#carouselExampleControls .carousel-inner").animate(
              { scrollLeft: scrollPosition },
              600
            );
          }
        });
      } else {
        $(multipleCardCarousel).addClass("slide");
      }

  
}, [])


  return (
    <div className="col-sm-12 card-carusel py-1">
    <div className='col-sm-10 mx-auto  card-slider my-5'>
      <div className="col-sm-8 mx-auto my-3 container">
        <h1 className='fw-bolder fs-2 text-center'>Take a deeper dive into a new way to work</h1>
      </div>
        <div id="carouselExampleControls" class="carousel">
    <div class="carousel-inner">
        <div class="carousel-item active">
          
            <div class="card h-100">
                <div class="img-wrapper"><img src={cd1} class="d-block w-100"className='h-100' alt="..."/> </div>
                <div class="card-body d-flex flex-column">
                    
                    <p class="card-text">Event</p>
                    <h3 className=' pt-0'>Ready for the future of Ai in slack?</h3>
                    <a href="#" className="card-link bd text-info-emphasis mt-auto">
          <b>WATCH ON DEMAND &#8594;</b>
          </a>
          
                </div>
                
            </div>
            
        </div>
        <div class="carousel-item">
            <div class="card h-100">
                <div class="img-wrapper"><img src={cd2} class="d-block w-100"className='h-100' alt="..."/> </div>
                <div class="card-body d-flex flex-column">
                    
                    <p class="card-text">Blog</p>
                    <h3 className=' pt-0'>Ten feature to know (and love) on slack's tenth birthday </h3>
                    <a href="#" className="card-link bd text-info-emphasis">
          <b>READ MORE &#8594;</b>
          </a>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="card h-100">
                <div class="img-wrapper"><img src={cd3} class="d-block w-100"className='h-100' alt="..."/> </div>
                <div class="card-body d-flex flex-column">
                    
                    <p class="card-text">Customer story</p>
                    <h3 className=' pt-0'>How OpenAi expands ChatGPT with slack</h3>
                    <a href="#" className="card-link bd text-info-emphasis mt-auto">
          <b>READ MORE &#8594;</b>
          </a>
                </div>
            </div>
        </div>
        <div class="carousel-item">
            <div class="card h-100">
                <div class="img-wrapper"><img src={cd4} class="d-block w-100" alt="..." className='h-100'/> </div>
                <div class="card-body d-flex flex-column">
                    
                    <p class="card-text">Event</p>
                    <h3 className='pt-0'>Top Slack tips to boots productivity </h3>
                    <a href="#" className="card-link bd text-info-emphasis mt-auto ">
          <b>WATCH NOW &#8594;</b>
          </a>
                </div>
            </div>
        </div>
        
        
        
    </div>
    <button class="carousel-control-prev hide" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next hide" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
    </div>
    </div>
  )
}
