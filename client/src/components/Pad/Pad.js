import React from "react";
import "../../pages/styles/start/start.css";
import cfs1 from "../../media/video/cfs1.mp4";
import cfs2 from "../../media/video/cfs2.mp4";
import cfs3 from "../../media/video/cfs3.mp4";



const Pad = (props) =>(
    <div className = "contain">
        <div className = "Paragraph-opening" key = {props.text}>
            <p>{props.text}</p>

        </div>
        
        <div className = "video" key = {props.video}>
                <video className = "video rounded" loop autoPlay>
                    <source className="d-block" src={props.video} alt="First"></source>
                </video>
        </div>
        <i className="cas fas fa-chevron-down" onClick = {props.click}></i>
    </div>
    
)
export default Pad;