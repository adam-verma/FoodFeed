import React from "react";



const Message = (props) => (

    <>
        <div className = "inline-message" data-user = {props.username} >{props.username}: {props.message}</div>
    </>



)


export default Message;