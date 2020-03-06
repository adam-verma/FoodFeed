import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./style.css";

let socket;



const ChatRoom = ({location}) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    

    


    // useEffect(() => {
    //     const data = queryString.parse(location.search);


    //     socket = io();

    //     setName(name);
    //     setRoom(room);

        

    //     socket.emit("join", { name, name});
    // },[]);


    return ( 
        <React.Fragment>
            <div className = "outer">
                {/* <div className = "wrapper"> */}
                    
                    

                <div className="bg-dark sidebar" style = {{backgroundColor: "#1E1E1E"}}>
                    <div className = "chat rounded-left">
                        <div className = "Title" align="center"><h1>Chat</h1></div>
                        <div className="chatinner rounded-bottom border border-white" style = {{backgroundColor: "#D7983C"}}>

                            <div className = "inline-message" data-user = "DAnMaN15726" >Hey Mahn, wa go on bloodclat?</div>
                            <div className = "inline-message" data-user = "SHUTUPMang696969" >SHUT UP NERD!</div>

                        </div>
                        <input class="form-control form-control-sm" type="text" placeholder="Say Something!"></input>
                        
                    </div>

                </div>
            </div>
        </React.Fragment>   


    )
}

export default ChatRoom;