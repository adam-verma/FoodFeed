import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./style.css";

let socket;



const ChatRoom = ({location}) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    

    


    useEffect(() => {
        const data = queryString.parse(location.search);


        socket = io();

        setName(name);
        setRoom(room);

        

        socket.emit("join", { name, name});
    },[]);


    return ( 
        <React.Fragment>
            <div className = "outer">
                {/* <div className = "wrapper"> */}
                    
                    
                    <iframe id = "exampleVideo" src="https://www.youtube.com/embed/JK0K2eL7VqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>

                <div className="bg-dark sidebar" style = {{backgroundColor: "#1E1E1E"}}>
                    <div className = "chat">
                        <div>ChatL;KJASDLF;KKJAS;LKDFJ;ASLDKFJAS;LDKFJ</div>
                            

                    </div>
                </div>
            </div>
        </React.Fragment>   


    )
}

export default ChatRoom;