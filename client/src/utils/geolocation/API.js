import axios from "axios";
require('dotenv').config();
const APIKEY = process.env.REACT_APP_API_KEY;



export default{
    Locate: async function(){
        return new Promise(resolve => {
            navigator.geolocation.getCurrentPosition(function(position) {
                let BASEURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=`;
                
                resolve(axios.get(BASEURL+APIKEY));
            });
        });
    },
}











