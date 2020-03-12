import axios from "axios";
import config from "../../../config/media_config";

const http_port = config.rtmp_server.http.port;

export default { 

    // Gets live streams
    getLiveStream: function() {
        return axios.get(`http://127.0.0.1:${http_port}/api/livestreams`)
    },

    // Gets user
    getUser: function() {
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