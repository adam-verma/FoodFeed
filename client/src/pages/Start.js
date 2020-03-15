import React     from "react";

import "../pages/styles/start/start.css";

import Carousel from "../components/Carousel/carousel.js";






const Start = () =>{



return (
        <div className = "contain">

            <div className = "Paragraph-opening">
                <p>
                    A platform where world-class chefs create world-class dishes, and stream it to you at
                    the comfort of your home.
                </p>

            </div>



            <Carousel/>




            
            
        </div>

    )
}



export default Start