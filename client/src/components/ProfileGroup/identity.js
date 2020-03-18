import React from "react";

const Identity = (prop) => (
    <div className = "supreme">
        <div className = "div1">
            <img className = "img coverPhoto" id = "coverPhoto" src = {prop.coverImage} key = {prop.coverImage}></img>
        </div>

        <div className = "div2 rounded">
            <div className = "profile">
                <div className = "panel rounded border-bottom">
                    <div className = "panel-body">
                        
                        <img className = "img-thumbnail rounded" id = "image" src = {prop.image} key = {prop.image}></img>
                        {prop.name}

                        
                        <div className = "icons">
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
                                <i class="fab fa-twitter-square border-right"></i>

                            </a>
                            <a href="#">
                                <i class="fab fa-patreon"></i>
                            </a>
                            <button className = "btn btn-primary btn-sm" id = "editProfile">Edit Profile</button>
                        </div>

                    </div>



                </div>



                <div className = "container-1">
                    <ul class="favoriteRecipes border" >
                        <h2>Favorite Recipes </h2> 
                        <li class="list-group-item">
                            <a href={prop.line1link}>{prop.line1}</a>
                        </li>
                        <li class="list-group-item">
                            <a href={prop.line2link}>{prop.line2}</a>
                        </li>
                        <li class="list-group-item">
                            <a href={prop.line3link}>{prop.line3}</a>  
                        </li>
                        <li class="list-group-item">
                            <a href={prop.line4link}>{prop.line4}</a>
                        </li>
                        <li class="list-group-item">
                            <a href={prop.line5link}>{prop.line5}</a>
                        </li>
                    </ul>


                    <div className = "panel2 rounded border" id = "aboutme">
                        <div className = "panel-body"> 
                         
                        <h2>About Me</h2>
                        <p>{prop.aboutMe}</p>

                        </div>
                    </div>

                </div>

                















            </div>
            






        </div>


    </div>







)

export default Identity;