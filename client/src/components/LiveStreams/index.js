import React from "react";
import {Link} from "react-router-dom";

function LiveStreams(props) {

    return (
        <div className="stream">
            <span className="live">{props.children}</span>
            <Link to = {`/stream/${props.stream.username}`}>
                <div className ="thumbnail">
                    <img src={`/thumbnails/${props.stream.streamKey}.png`}/>
                </div>
            </Link>

            <span className="userName">
                <Link to = {`/stream/${props.stream.username}`}>
                    ${props.stream.username}
                </Link>
            </span>
        </div>
    );
}


export default LiveStreams; 