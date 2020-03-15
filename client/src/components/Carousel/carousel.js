import React from "react";



const Carousel = (props) =>(
    
    <div className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
            <video loop autoPlay className="carousel-item active">
                <source className="d-block" src={props.vid1} alt="First"></source>
            </video>
            <video loop autoPlay className="carousel-item">
                <source className="d-block" src={props.vid2} alt="Second"></source>
            </video>
            <video loop autoPlay className="carousel-item">
                <source className="d-block" src={props.vid3} alt="Third"></source>
            </video>
        </div>
    </div>
    
)
export default Carousel;