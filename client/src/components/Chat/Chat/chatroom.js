import React, { useState, useEffect, useReducer } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import ScrollToBottom from "react-scroll-to-bottom";
import "./style.css";
import Message from "./inline.js"

let ENDPOINT;

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
    ENDPOINT = "http://localhost:3002";
};


const ChatRoom = ({location}) => {
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    
    const [message, setMessage] = useState([]);


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

    useEffect(() =>{
        socket.on("sendMessage", (message) =>{

            setMessage(message);
        })




    }, [message]);


    const sendMessage = (event) => {
        if(message) {
            socket.emit("sendMessage", message, () => setMessage(""));
        }

        console.log(message);
    }





    return ( 
        <React.Fragment>
            <div className = "outer">
                {/* <div className = "wrapper"> */}
                    
                    

                <div className="bg-dark sidebar" style = {{backgroundColor: "#1E1E1E"}}>
                    <div className = "chat rounded-left">
                        <div className = "Title" align="center"><h1>Chat</h1></div>
                        <div className="chatinner rounded-bottom border border-white" style = {{backgroundColor: "#FFAD33"}}>
                            <ScrollToBottom>
                                <Message username = {"Cartman"} message = {"HEY"}/>
                                <Message username = {"Kyle"} message = {"What do you want fat-ass?"}/>
                                <Message username = {"Cartman"} message = {"Shut-up jewboy!"}/>
                                <Message username = {"Kyle"} message = {"Screw you fatboy!"}/>
                                {/* {message.map((result, i) =>(

                                    <Message username = {"Stan"} message ={result} />
                                ))} */}
                            </ScrollToBottom>


                        </div>
                        <input className="form-control form-control-sm" type="text" placeholder="Say Something!" value = {message}  
                        onChange = {(event) => setMessage(event.target.value)}  onKeyPress = {event => event.key === "Enter" ? sendMessage(event) : null}></input>
                        <button type="button" className="btn " type = "submit" >Enter</button>
                    </div>

                </div>
            </div>
        </React.Fragment>   


    )
}

export default ChatRoom;