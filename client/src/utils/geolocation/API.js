import axios from "axios";
require('dotenv').config();
const APIKEY = process.env.REACT_APP_API_KEY;



let location;


export default{
    Locate: function(){
        navigator.geolocation.getCurrentPosition(function(position) {
            // https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyCafEkv6HYw1LTHzel8dhHZ0-bxvq9zTQ0

            let BASEURL = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&key=`;
            
            axios.get(BASEURL+APIKEY).then(response => {
                
                location = response.data.results[4].formatted_address;
            }).catch(error => {
                console.log(error.response)
            });
        });
        
        return location;
    },





}











