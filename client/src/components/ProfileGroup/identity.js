import React from "react";

const Identity = (prop) => (
    <div className = "supreme">
        <div className = "div1">
            <img className = "img coverPhoto" id = "coverPhoto" src = {prop.coverImage} key = {prop.coverImage}></img>
        </div>
        {/* <div className = "sidebar">
            <ul class="following border" >
                <h2 className = "border-bottom">
                
                </h2>
                <li class="list-group-item">
                    
                </li>
                <li class="list-group-item">
                    
                </li>
                <li class="list-group-item">
                    
                </li>
                <li class="list-group-item">
                    
                </li>
                <li class="list-group-item">
                    
                </li>
            </ul>
        </div> */}




        <div className = "div2 rounded">
            <div className = "profile">

            <div className = "sidebar">
                <div class="following border-left" >
                    
                    <ul>
                        <img className = "circleImage" src = {prop.image1}></img>
                    
                        <img className = "circleImage" src = {prop.image2}></img>
                    
                        <img className = "circleImage" src = {prop.image3}></img>
                    
                        <img className = "circleImage" src = {prop.image4}></img>
                    
                        <img className = "circleImage" src = {prop.image5}></img>

                        <img className = "circleImage" src = {prop.image1}></img>
                    
                        <img className = "circleImage" src = {prop.image2}></img>
                    
                        <img className = "circleImage" src = {prop.image3}></img>
                    
                        <img className = "circleImage" src = {prop.image4}></img>
                    
                        <img className = "circleImage" src = {prop.image5}></img>

                        <img className = "circleImage" src = {prop.image1}></img>
                    
                        <img className = "circleImage" src = {prop.image2}></img>
                    
                        <img className = "circleImage" src = {prop.image3}></img>
                    
                        <img className = "circleImage" src = {prop.image4}></img>
                    
                        <img className = "circleImage" src = {prop.image5}></img>
                        
                        
                    </ul>
                </div>
            </div>

                <div className = "panel rounded border-bottom">
                    <div className = "panel-body">
                        
                        <img className = "img-thumbnail rounded" id = "image" src = {prop.image} key = {prop.image}></img>
                        <h3 className = "NAME">{prop.name}</h3>

                        
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
                            <button className = "btn btn-primary btn-sm" id = "cartCheckout">Cart/Checkout</button>
                        </div>

                    </div>



                </div>



                <div className = "container-1">
                <ul class="streamSchedule border" >
                        <h2 className = "border-bottom">Stream Schedule</h2> 
                        
                    </ul>






                    <ul class="favoriteRecipes border" >
                        <h2 className = "border-bottom">Favorite Recipes  
                            <button class="btn" type="submit" id = "recipeAdd" onClick = {prop.recipeAddClick}>
                                <i class="far fa-plus-square"></i>
                            </button>
                        </h2>
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
                         
                        <h2 className = "border-bottom">About Me</h2>
                        <p>{prop.aboutMe}</p>

                        </div>
                    </div>
                    
                    <div className = "panel3 rounded border" ></div>

                </div>


                <ul class="cookingHistory border" >
                        <h2 className = "border-bottom">Signature Recipes  
                            <button class="btn" type="submit" id = "recipeAdd" onClick = {prop.recipeAddClick}>
                                <i class="far fa-plus-square"></i>
                            </button>
                        </h2>
                        <li class="list-group-item">
                            <a href={prop.line1linkCH}>{prop.line1CH}</a>
                        </li>
                        <li class="list-group-item">
                            <a href={prop.line2linkCH}>{prop.line2CH}</a>
                        </li>
                        <li class="list-group-item">
                            <a href={prop.line3linkCH}>{prop.line3CH}</a>  
                        </li>
                        <li class="list-group-item">
                            <a href={prop.line4linkCH}>{prop.line4CH}</a>
                        </li>
                        <li class="list-group-item">
                            <a href={prop.line5linkCH}>{prop.line5CH}</a>
                        </li>
                    </ul>

                















            </div>
            






        </div>


    </div>







)

export default Identity;