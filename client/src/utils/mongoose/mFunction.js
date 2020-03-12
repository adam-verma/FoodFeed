import axios from "axios";


export default {
    getStreamerChat: function() {
        return axios.get("/api/streamers");
    }

}