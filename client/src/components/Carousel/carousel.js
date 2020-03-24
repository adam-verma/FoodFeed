import React from "react";
import "../../pages/styles/start/start.css";



const Pad = (props) =>(
    <div className = "contain">
        <div className = "Paragraph-opening">
            <p>{props.text}</p>

        </div>
        
        <div className = "video">
                <video loop autoPlay>
                    <source className="d-block" src={props.video} alt="First"></source>
                </video>
        </div>

    </div>
    
)
export default Pad;