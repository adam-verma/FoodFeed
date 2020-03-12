import React from "react";
import {Link} from "react-router-dom";

function LiveStreams({children }) {
    let live_streams = streams.map((stream, index) => {
    return (
        <div className="stream" key={index}>
            <span className="live">{children}</span>
            <Link to = {`/stream/${stream.username}`}>
                <div className ="thumbnail">
                    <img src={`/thumbnails/${stream.streamKey}.png`}/>
                </div>
            </Link>

            <span className="userName">
                <Link to = {`/stream/${stream.username}`}>
                    ${stream.username}
                </Link>
            </span>
        </div>
    );
});
    return (
        {live_streams}
    )
}


export default LiveStreams; 