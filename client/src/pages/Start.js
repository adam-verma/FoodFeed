import React     from "react";

import "../pages/styles/start/start.css";

import Carousel from "../components/Carousel/carousel.js";
import c1 from "../media/video/c1.mp4";
import c2 from "../media/video/c2.mp4";
import c3 from "../media/video/c3.mp4";
import f1 from "../media/video/f1.mp4";
import f2 from "../media/video/f2.mp4";
import f3 from "../media/video/f3.mp4";
import s1 from "../media/video/s1.mp4";
import s2 from "../media/video/s2.mp4";
import s3 from "../media/video/s3.mp4";




const Start = () =>{



return (
        <div className = "contain">

            <div className = "Paragraph-opening">
                <p>
                    A platform where world-class chefs create world-class dishes, and stream it to you at
                    the comfort of your home.
                </p>

            </div>



            <Carousel
                vid1 = {c1 + "#t=1,4"}
                vid2 = {f1 + "#t=1,4"}
                vid3 = {s1 + "#t=1,4"}

            
            
            />




            
            
        </div>

    )
}



export default Start