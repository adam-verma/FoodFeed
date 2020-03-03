import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";


let socket;



const ChatRoom = ({location}) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const ENDPOINT = "localhost:3000"


    useEffect(() => {
        const data = queryString.parse(location.search);


        socket = io(ENDPOINT);

        setName(name);
        setRoom(room)
        console.log(socket);
    });


    return ( 
        <h1>Chat</h1>
    )
}

export default ChatRoom;