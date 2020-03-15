import axios from "axios";
import config from "../../../config/media_config";

const http_port = config.rtmp_server.http.port;

export default { 

    // Gets live streams
    getLiveStream: function() {
        return (axios.get(`http://127.0.0.1:${http_port}/api/livestreams`)
        .then( res => {
            let streams = res.data; 
            console.log(streams);
            if (typeof (streams['live'] !== 'undefined')) {
                getStreamInfo(streams['live']);
            }
        })
        )
    },
    // XHR request to server for getting user record
    getStreamInfo: function(live_streams) {
        return (axios.get('/streams/info', {
            params: {
                streams: live_streams
            }
        })
    },
    
    // Gets user
    getUser: function() {
        return axios.get("/user", {
            params: { 
                username: props.match.params.username
            }
        })
    },

    // Get stream key
    getStreamKey: function() { 
        return axios.get("/settings/streamKey")
    },
    // Post stream key
    postStreamKey: function(skdata) {
        return axios.post("/settings/streamKey", skdata);
    }
};