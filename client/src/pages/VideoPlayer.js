import React, {useState, useEffect} from "react";
// import VideoPlayer from "../components/VideoPlayer";
import { Col, Row, Container} from "../components/Grid";
import videojs from "video.js";
import config from "../utils/config/media_config";
import API from "../utils/API";

const VideoPlayer = () => {
const [video, setVideo] = useState({
    stream: false, 
    videoJsOptions: null
})

useEffect(() => { 
    loadvideo();
    const videoNode = document.getElementById('video-js');
    let player = videojs(videoNode, video.videoJsOptions, function onPlayerReady() {
        console.log('onPlayerReady', video, 'Player', player);
    });

    return() => {
           if (player) {
        player.dispose();
        console.log(player);
    }
    }
}, []);

// Load user video
const loadvideo = async (props) => {
    try {
        const res = await API.getUser(props.match.params.username);
        let streams = res.data; 
        console.log(streams);
        if (typeof (streams['live'] !== 'undefined')) {
            API.getStreamInfo(streams['live']);
        }
        setVideo({ 
            stream: true, 
            videoJsOptions: {
                autoplay: false,
                controls: true,
                sources: [{
                    src: `http://127.0.0.1:${config.rtmp_server.http.port}/live/${res.data.stream_key}/index.m3u8`,
                    type: 'application/x-mpegURL'
                }],
                fluid: true,
            }
        });

       
    } catch(err) {
        console.group("LOAD video");
        console.log(err);
        console.groupEnd(); 
    }
};

return (
    <Row>
        <Col size="xs-12 sm-12 md-10 lg-8">
            {video.stream ? (
                <div data-vjs-player>
                    <video videoNode className = "video-js vjs-big-play-centered"/>
                </div>
            ) : 'Loading...'}
        </Col>

    </Row> 
)

}
    
export default VideoPlayer;