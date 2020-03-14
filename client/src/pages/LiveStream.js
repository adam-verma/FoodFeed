import React, {useState, useEffect} from "react";
import LiveStreams from "../components/LiveStreams";
import { Col, Row, Container} from "../components/Grid";
import videojs from "video.js"
import config from "../../../config/media_config"
import API from "../utils/API"


const LiveStream = () => {
const [stream, setStream] = useState({
    stream: false, 
    videoJsOptions: null
})


useEffect(() => { 
    loadStream();
    return() => {
        
    }
}, []);

// Load user stream
const loadStream = async () => {
    try {
        const res = await API.getUser(); 
        setStream({ 
            stream: true, 
            videoJsOptions: {
                autoplay: false,
                controls: true,
                sources: [{
                    src: `http://127.0.0.1:${config.rtmp_server.http.port}/live/${res.data.streamKey}/index.m3u8`,
                    type: 'application/x-mpegURL'
                }],
                fluid: true,
            }
        }, () => {
            const player = videojs(videoNode, videoJsOptions, function onPlayerReady() {
                console.log('onPlayerReady', player);
            });
        });
    } catch(err) {
        console.group("LOAD STREAM");
        console.log(err);
        console.groupEnd(); 
    }
};

}
    
