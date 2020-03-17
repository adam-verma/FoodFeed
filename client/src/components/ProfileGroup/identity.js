import React from "react";

const Identity = (prop) => (
    <div className = "supreme">
        <div className = "div1">
            <img className = "img coverPhoto" id = "coverPhoto" src = {prop.coverImage} key = {prop.coverImage}></img>
        </div>

        <div className = "div2 rounded">
            <div className = "profile">
                <div className = "panel rounded">
                    <div className = "panel-body">
                        
                        <img className = "img-thumbnail rounded" id = "image" src = {prop.image} key = {prop.image}></img>
                        {prop.name}
                        <a href="#">
                            <i class="fab fa-facebook-square border-right"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-instagram-square border-right"></i>
                        </a>
                        <a href="#">
                            <i class="fab fa-snapchat-square border-right"></i>
                        </a>


                        
                        
                        <a href="#">
                            <i class="fab fa-twitter-square"></i>

                        </a>


                    </div>



                </div>

            </div>


        </div>


    </div>







)

export default Identity;