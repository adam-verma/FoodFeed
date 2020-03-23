import React, { useState, useEffect}     from "react";
import ReactDOM from 'react-dom';

import Pad from "../components/Pad/Pad.js";
import cfs1 from "../media/video/cfs1.m4v";
import cfs2 from "../media/video/Cfs2.m4v";
import cfs3 from "../media/video/Cfs3.m4v";
import Register from "../components/Signup/index.js";

import "../pages/styles/start/start.css";




const Start = () =>{
    const [slide, setSlide] = useState("slide1");
    const [video, setVideo] = useState("video1");

    const videoMap ={
        video1: cfs1,
        video2: cfs2,
        video3: cfs3
    }

    

    const update = (slide) => {

        setSlide(slide);
        
        
        
    }


    
    
    const propMap = {
        slide1:
            <Pad
                text = {"A platform where world-class chefs create world-class dishes, and you get the inside scoop into how it's done."}
                video = {document.getElementsByTagName("source").src = cfs1}
                click = {() => update("slide2")}
                
            />
        ,
        slide2:
            <Pad
                text = {"Learn new additions and techniques behind cooking your favorite dishes! Ask questions and join the community."}
                video = {document.getElementsByTagName("source").src = cfs2}
                click = {() => update("slide3")}
            />
        ,
        slide3:
            <Pad
                text = {"Looks delish? Nearby? Order right from the comfort of your home!"}
                video = {document.getElementsByTagName("source").src = cfs3}
                click = {() => update("slide4")}
            />
        ,
        slide4:
            
                <>
                    
                    <Register
                        appendClass = {document.getElementsByClassName("container").className = "contain"}
                    />
                </>
            
    }


    

    return (
            <React.Fragment>

                {propMap[slide]}
                
                
                
            </React.Fragment>

        )
}



export default Start;