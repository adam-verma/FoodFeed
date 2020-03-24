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

const socketv = io("http://localhost:3002")
const ChatRoom = () => {
    
    const [name, setName] = useState("");
    const [room, setRoom] = useState("");
    
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);

    const [messagebroad, setMessagebroad] = useState("");
    const [messagesbroad, setMessagesbroad] = useState([]);


    
    
    // const streamRoom = queryString.parse(location.search);
    const streamRoom = window.location.href;


    useEffect(() => {
        


        async function connect () {
            const socket = io.connect("http://localhost:3002");
         }
        connect();
        
        
        socketv.on("join", streamRoom => {
            console.log(streamRoom);

            socketv.off('join', streamRoom);  
        });

        // setName(name);
        // setRoom(room);
        
        

        return () => {
            socketv.emit("disconnect");
            socketv.off();
        }

    },[streamRoom]);


    
    socketv.on("chatMessage", (massage) =>{
        setMessagesbroad([massage])
        
        
        
        console.log(messagesbroad);
            
        
       

        const element = document.getElementById("chatIner");
        element.scrollTop = element.scrollHeight;
        
    })

    


    const sendMessage = (event) => {
        
        if(message) {
            socketv.emit("sendMessage", message)
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
                                <Inline username = {"Cartman"} message = {"Hey I'm your biggest fan!"}/>
                                <Inline username = {"Kyle"} message = {"oh em geee, it's streamerman!"}/>
                                <Inline username = {"Kenny"} message = {"MhmhmnngngHMMHMM"}/>
                                <Inline username = {"Randy Marsh"} message = {"OHMYGAWLITSGORDONRAM SEY!!!"}/>
                                <Inline username = {"Stan"} message = {"Beef Wellington"}/>
                                <Inline username = {"Randy Marsh"} message = {"Creme Fraiche!"}/>
                                

                                {messagesbroad.map((result, i) =>(
                                    
                                    <Inline username = {"Stan"} message ={result}  key = {i}/>
                                ))}


                                {messages.map((result, i) =>(
                                    
                                    <Inline username = {"User"} message ={result}  key = {i}/>
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