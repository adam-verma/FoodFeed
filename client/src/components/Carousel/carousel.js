import React from "react";



const Carousel = (props) =>(
    
    <div class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img class="d-block" src={props.img1} alt="First"></img>
            </div>
            <div class="carousel-item">
                <img class="d-block" src={props.img2} alt="Second"></img>
            </div>
            <div class="carousel-item">
                <img class="d-block" src={props.img3} alt="Third"></img>
            </div>
        </div>
    </div>
    
)
export default Carousel;