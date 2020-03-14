import React from "react";
import API from "../../utils/geolocation/API.js";

const Geolocation = (props) =>(
    <div>
        <div className = "card security-security">
            <label>Location Information</label>
            <div className="card-body">
                <p>We require your location to tailor Chefs based on your proxmity. If you want to buy dishes that your chefs make on stream, your location is required!</p>
                
                <button className = "security-btn" type = "button" onClick = {props.clicked}>Give Location</button>
                <p>Current Location: {props.location}</p>
            </div>
        </div>
    </div>





)
// () => GEOAPI.Locate()}


export default Geolocation;