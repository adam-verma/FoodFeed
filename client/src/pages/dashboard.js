import React, { useState, useEffect } from "react";
import "../pages/styles/dashboard/dashboard.css";

import Identity from "../components/ProfileGroup/identity.js";
import Modal from "../components/ModalGroup/modal.js";


import "bootstrap/dist/css/bootstrap.min.css";
import cover from "../media/photo/coverPhoto.jpg";
import portrait from "../media/photo/profilePhoto.png"
import girl1 from "../media/photo/girl1.png";
import girl2 from "../media/photo/girl2.jpg";
import guy1 from "../media/photo/guy1.jpg";
import suda from "../media/photo/suda.png";
import fam1 from "../media/photo/fam1.jpg";


const Dashboard = () => {
    







    const modalToggle = () => {
        if (document.getElementById("Modal1").style.display === "block"){

            document.getElementById("Modal1").style.display = "none";

        }
        else{
            document.getElementById("Modal1").style.display = "block";
        }

    }










    return(
        <React.Fragment>
        <>
            {/* I purposely chose to do it this way instead of using an array&map(). Temporary at best */}
            <Identity
                coverImage = {cover}
                image = {portrait}
                name = {"Dave Chang"}
                aboutMe = {"David Chang is an American restaurateur, author, and television personality. He is the founder of the Momofuku restaurant group, which includes Momofuku Noodle Bar, Momofuku Ssäm Bar and Milk Bar. Chang has received numerous nominations and awards, including two Michelin stars for Ko, 2007 James Beard Rising Star of the Year, 2008 James Beard Best Chef: New York City for Ssäm Bar, and 2009 James Beard Best New Restaurant for Ko. In 2012, Chang was nominated for the James Beard Outstanding Chef award."}
                location = {"Houston, Texas"}
                role = {"Chef|Entrepenour|Business Mogal"}

                cardCheckout = {() => modalToggle()}

                    day1 = {"Monday @ 7 p.m."}
                    day2 = {"Tuesday @ 7 p.m."}
                    day3 = {"Wednesday @ 7 p.m."}
                    day4 = {"Thursday @ 7 p.m."}
                    day5 = {"Friday @ 7 p.m."}
                    day6 = {"Saturday @ 7 p.m."}
                    day7 = {"Sunday @ 7 p.m."}

                    timezone1 = {"CST"}
                    timezone2 = {"CST"}
                    timezone3 = {"CST"}
                    timezone4 = {"CST"}
                    timezone5 = {"CST"}
                    timezone6 = {"CST"}
                    timezone7 = {"CST"}
                
                // Favorite Food
                line1 = {"Ramen Noodles"}
                line2 = {"Pot-Stickers"}
                line3 = {"Clams Casino"}
                line4 = {"Orange Chicken"}
                line5 = {"Bacon-wrapped-Cream-cheese-Stuffed Chicken Breasts"}
                line1link = {"https://www.food.com/recipe/creamy-ramen-noodles-133448"}
                line2link = {"https://www.food.com/recipe/chinese-pot-stickers-13320"}
                line3link = {"https://www.food.com/recipe/lynns-killer-clams-casino-111464"}
                line4link = {"https://www.food.com/recipe/orange-chicken-354466"}
                line5link = {"https://www.food.com/recipe/bacon-wrapped-cream-cheese-stuffed-chicken-breasts-351156"}

                // recipeAddClick = {}



                // Following
                image1 = {girl1}
                image2 = {suda}
                image3 = {guy1}
                image4 = {girl2}
                image5 = {fam1}


                // Signature Recipes
                line1CH = {"Takiachi"}
                line2CH = {"KUNG PAO CHIKEN"}
                line3CH = {"Chicken Cordon-Bleu"}
                line4CH = {"Bodacious Cake"}
                line5CH = {"Ramen Noodles in a Cup...al a mode...a la carte on a la king"}
                // line1linkCH = {}
                // line2linkCH = {}
                // line3linkCH = {}
                // line4linkCH = {}
                // line5linkCH = {}




            />
        </>
        
        <Modal
            title = {"Cart/Checkout"}
            body = {"HEY YOU I AM A MODAL BE STRUCK IN AWE OF MY GLORY"}
            closeClick = {() => modalToggle()}

            body = {
                    <>
                        <div class="panel panel-default border-bottom tokenInfo">
                            Orders Outgoing:
                            <div class="panel-body outgoin">
                                <p>Chicken Tiki Masala</p>
                                <button className = "btn btn-primary btn-sm" id = "indicator">Not Yet Received</button>
                            </div>
                        </div>
                        <div class="panel panel-default border-bottom .text-muted tokenInfo">
                            Orders Incoming:
                            <div class="panel-body incomin">
                                <p>Bourbon Wagyu Beef Burger</p>
                                <button className = "btn btn-primary btn-sm" id = "indicator">>5 Minutes</button>
                            </div>
                        </div>
                    </>
                
                }


            
        />








        </React.Fragment>
    )
}


export default Dashboard;