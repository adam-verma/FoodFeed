import axios from "axios";
import config from "../config/media_config";

export default { 

    // Gets live streams
    getLiveStream: function() {
        return (axios.get('http://127.0.0.1:' + config.rtmp_server.http.port + '/api/streams'))
    },
    // XHR request to server for getting user record
    getStreamInfo: function(props) {
        return axios.get('/streams/info', {props})
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