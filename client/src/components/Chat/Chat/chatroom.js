import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./style.css";

let socket;



const ChatRoom = ({location}) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const ENDPOINT = ('localhost:3001');

    


    useEffect(() => {
        const data = queryString.parse(location.search);


        socket = io(ENDPOINT);

        setName(name);
        setRoom(room);

        console.log(socket);

        socket.emit("join", { name, name,});
    },[ENDPOINT, location.search]);


    return ( 
        
        <div className = "wrapper">
            
            
            <iframe id = "exampleVideo" src="https://www.youtube.com/embed/JK0K2eL7VqI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>

           
            <div className="bg-dark grid" style = {{backgroundColor: "#1E1E1E"}}>
                <div className = "sidebar">
                    <div className = "chat" style = {{backgroundColor: "#37373D"}}>
                        DDDDDDDDDDDDDDDdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd

                    </div>
                    

                </div>
            </div>


        </div>
            


    )
}

export default ChatRoom;