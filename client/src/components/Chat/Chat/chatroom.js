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
                    <div className = "chat">
                        <div className = "Title" align="center"><h1>Chat</h1></div>
                        <div className="chat-inner" style = {{backgroundColor: "#D7983C"}}></div>

                    </div>
                </div>
            </div>
        </React.Fragment>   


    )
}

export default ChatRoom;