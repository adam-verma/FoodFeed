import React, { useState, useEffect, useReducer } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./style.css";

let socket;



const ChatRoom = ({location}) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    const ENDPOINT = "http://127.0.0.1:3002";
    

    
    


    useEffect(() => {
        socket = io(ENDPOINT);
        const data = queryString.parse(location.search);
        socket.on("chat message", data => {
            console.log(data);
        });

        

        // setName(name);
        // setRoom(room);
        

        socket.emit("join", { name, name});
    },[]);


    return ( 
        <React.Fragment>
            <div className = "outer">
                {/* <div className = "wrapper"> */}
                    
                    

                <div className="bg-dark sidebar" style = {{backgroundColor: "#1E1E1E"}}>
                    <div className = "chat rounded-left">
                        <div className = "Title" align="center"><h1>Chat</h1></div>
                        <div className="chatinner rounded-bottom border border-white" style = {{backgroundColor: "#FFAD33"}}>

                            <div className = "inline-message" data-user = "DAnMaN15726" >{"DAn: "}Hey Mahn, wa go on bloodclat?</div>
                            <div className = "inline-message" data-user = "SHUTUPMang696969" >{"BeTcH: "}SHUT UP NERD!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!</div>
                            

                        </div>
                        <input className="form-control form-control-sm" type="text" placeholder="Say Something!"></input>
                        
                    </div>

                </div>
            </div>
        </React.Fragment>   


    )
}

export default ChatRoom;