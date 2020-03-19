import axios from "axios";
// import config from "../../../media_server";

// const http_port = config.rtmp_server.http.port;

export default { 

    // Gets live streams
    getLiveStream: function() {
        return (axios.get(`/api/livestreams`))
    },
    // XHR request to server for getting user record
    getStreamInfo: function(liveStreams) {
        return axios.get('/streams/info')
    },
    
    // Gets user
    getUser: function(username) {
        return axios.get("/user")
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