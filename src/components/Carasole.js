import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Carasole=()=>{
    return(
        <>
        <Carousel>
                <div>

                    <img src="assets/img/slider-1-cover.jpg"  />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/img/slider-2-cover.jpg" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src="assets/img/slider-3-cover.jpg" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </>
    )
}
export default Carasole