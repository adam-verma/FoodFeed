import React, { useState, useEffect, useReducer } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import "./style.css";
import Inline from "./inline.js";
import "../../../pages/styles/VideoPlayer/videoplayer.css";

let ENDPOINT;

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
    ENDPOINT = "http://localhost:3002";
};


const ChatRoom = ({}) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const [messagebroad, setMessagebroad] = useState("");
    const [messagesbroad, setMessagesbroad] = useState(["bra"]);


    const socket = io.connect(ENDPOINT);
    // const streamRoom = queryString.parse(location.search);
    const streamRoom = window.location.href;


    useEffect(() => {
        
        const socket = io(ENDPOINT);
        
        socket.on("join", streamRoom => {
            console.log(streamRoom);
        });

        // setName(name);
        // setRoom(room);
        
        

        // return () => {
        //     socket.emit("disconnect");
        //     socket.off();
        // }

    },[streamRoom]);


    
    socket.on("chatMessage", (message) =>{

        
            setMessagesbroad(oldValue =>
                 [...oldValue, message]
            )
              console.log(messages);
    })

    


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
    


    // Auto-scrolling the div down on message
    useEffect(() => {
        const element = document.getElementById("chatIner");
        element.scrollTop = element.scrollHeight;

    }, [message]);

    return ( 
        <React.Fragment>
            <div className = "outer">
                {/* <div className = "wrapper"> */}
                    
                    

                <div className="bg-dark sideb" style = {{backgroundColor: "#1E1E1E"}}>
                    <div className = "chat rounded-left fixed-right">
                        <div className = "Title" align="center"><h1>Chat</h1></div>
                        <div className=" chatinner rounded-bottom border border-white " id = "chatIner" style = {{backgroundColor: "#FAFAFA"}}>
                            <ScrollToBottom>
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
                                {messages.map((result, i) =>(

                                    <Inline username = {"Stan"} message ={result}  key = {i}/>
                                ))}

                                {messagesbroad.map((result, i) =>(
                                    <Inline username = {"KENNY"} message ={result}  key = {i}/>
                                ))}

                            </ScrollToBottom>


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