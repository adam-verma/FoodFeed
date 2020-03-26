import React, { useState, useEffect, useReducer } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./style.css";
import Inline from "./inline.js"

let ENDPOINT;

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
    ENDPOINT = "http://localhost:3002";
};


const ChatRoom = ({location}) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);



    const socket = io(ENDPOINT);
    const streamRoom = queryString.parse(location.search);
    // useEffect(() => {
        
    //     const socket = io(ENDPOINT);
    //     const data = queryString.parse(location.search);
    //     socket.on("chat message", data => {
    //         console.log(data);
    //     });

    //     // setName(name);
    //     // setRoom(room);
        
    //     socket.emit("join",{}, ({msg}) => {
    //         alert(msg);
    //     });

    //     return () => {
    //         socket.emit("disconnect");
    //         socket.off();
    //     }


    // },[streamRoom]);

    // useEffect(() =>{
    //     socket.on("sendMessage", (message) =>{

    //         setMessage(message);
    //     })




    // }, [message]);


    const sendMessage = (event) => {
        
        if(message) {



            socket.emit("sendMessage", message)
            setMessage("")
            setMessages(oldValue =>
                 [...oldValue, message]
            )
              console.log(messages); 
        
        }

        console.log(message);


        
    }





    return ( 
        <React.Fragment>
            <div className = "outer">
                {/* <div className = "wrapper"> */}
                    
                    

                <div className="bg-dark sidebar" style = {{backgroundColor: "#1E1E1E"}}>
                    <div className = "chat rounded-left fixed-right">
                        <div className = "Title" align="center"><h1>Chat</h1></div>
                        <div className=" overflow-auto chatinner rounded-bottom border border-white " style = {{backgroundColor: "#FAFAFA"}}>
                                <Inline username = {"Cartman"} message = {"HEY"}/>
                                <Inline username = {"Kyle"} message = {"What do you want fat-ass?"}/>
                                <Inline username = {"Cartman"} message = {"Shut-up jewboy!"}/>
                                <Inline username = {"Kyle"} message = {"Screw you fatboy!"}/>
                                <Inline username = {"Cartman"} message = {"HEY"}/>
                                <Inline username = {"Kyle"} message = {"What do you want fat-ass?"}/>
                                <Inline username = {"Cartman"} message = {"Shut-up jewboy!"}/>
                                <Inline username = {"Kyle"} message = {"Screw you fatboy!"}/>
                                <Inline username = {"Cartman"} message = {"HEY"}/>
                                <Inline username = {"Kyle"} message = {"What do you want fat-ass?"}/>
                                <Inline username = {"Cartman"} message = {"Shut-up jewboy!"}/>
                                <Inline username = {"Cartman"} message = {"HEY"}/>
                                <Inline username = {"Kyle"} message = {"What do you want fat-ass?"}/>
                                <Inline username = {"Cartman"} message = {"Shut-up jewboy!"}/>
                                <Inline username = {"Kyle"} message = {"Screw you fatboy!"}/>
                                
                                <Inline username = {"Kyle"} message = {"Screw you fatboy!"}/>
                                {messages.map((result) =>(

                                    <Inline username = {"Stan"} message ={result} />
                                ))}

                        </div>
                        <input className="form-control form-control-sm" type="text" placeholder="Say Something!" value = {message}  
                        onChange = {(event) => setMessage(event.target.value)}  onKeyPress = {event => event.key === "Enter" ? sendMessage(event.target.value) : null}></input>
                        {/* <button type="button" className="btn " type = "submit" >Enter</button> */}
                    </div>

                </div>
            </div>
        </React.Fragment>   


    )
}

export default ChatRoom;