import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";


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
            

            <nav className="col-2 d-none d-md-block bg-dark sidebar float-right" style = {{backgroundColor: "#1E1E1E"}}>
                <div className = "sidebar-sticky border-bottom-0 border-right-0">
                    <div className = "chat" style = {{backgroundColor: "#37373D"}}>
                        muahahahfffffffffffffffff
                    </div>
                    

                </div>
            </nav>


        </div>
            


    )
}

export default ChatRoom;