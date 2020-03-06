import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./style.css"

const Sign = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');



    return(
        
        <div className = "wrapper">
            <h1>Join</h1>
            <div className = "sidebar">
                <div class="innersidebar">
                    <div><input placeholder = "" className = "input" type = "text" onChange = {(event) => setName(event.target.value)} /></div>
                    <div><input placeholder = "" className = "input" type = "text" onChange = {(event) => setRoom(event.target.value)} /></div>
                    <Link onClick = {event => (!name || !room) ? event.preventDefault() :null} to = {`/chat?name=${name}&room=${room}`}>
                        <button className = "button mt-20" type = "submit">Sign In</button>
                    </Link>


                </div>

            </div>
        </div>
    )
    

}

export default Sign;