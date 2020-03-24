import React, { useState, useEffect } from "react";
import to from 'await-to-js';
import "./styles/settings/settings.css";

import Notifications from "../components/SettingsGroup/notifications.js";
import Securiprivacy from "../components/SettingsGroup/securiprivacy.js";
import Geolocation from "../components/SettingsGroup/geolocation.js";
import Account from "../components/SettingsGroup/account.js";
import Toggle from "../components/SettingsGroup/toggle.js";
import API from "../utils/API";
import GEOAPI from "../utils/geolocation/API.js";
import KeyContainer from "../components/SettingsGroup/streamingkey";
import streamGuide from "../components/SettingsGroup/streamGuide";

// TODO:This is not a real import. This helps me follow a train of thought. REMOVE AFTER DONE.
import MongooseData from "mongoose";


const Settings = (props) => {
    
    const [component, setComponent] = useState("Geolocation");
    const [results, setResults] = useState(['No Location on file!']);
    const [key, setKey] = useState({streamKey: ''});

    // TODO:REPLACE WITH MONGOOSE SEEDS
    const exampleChefs = ["Murphy","21 Savage", "23 Savage", "Joe Mama"];
    let local;

    useEffect(() => { 
        loadStreamKey();
    });

    const loadStreamKey = async (props) => {
        const res = await API.getStreamKey();
        setKey({streamKey: res.data.streamKey})
    }
    
    const postStreamKey = async (props) => {
        const res = await API.postStreamKey();
        setKey({streamKey: res.data.streamKey})
    }
    const locationHandler = async () => {
        const [dataError, data] = await to(GEOAPI.Locate());
        if(dataError) return;

        const location = data.data.results[4].formatted_address;
        setResults(location);
    };

    const componentMap = {
        Notifications:
        <>
            <h1>Notifications</h1>
            <Notifications
                description1 = {"Notify Via Email"}
                
            />
            <br></br>
            <Toggle
                name = {" All "}
            />
            {exampleChefs.map((result, i) =>(
    
                <Toggle
                    key = {i}
                    name = {result} 
                /> 
            ))}
            <br></br>
            <br></br>
            <Notifications
                description1 = {"Notify Via SMS Text Message"}
            />
            <br></br>
            <Toggle
                name = {" All "}
            />
            {exampleChefs.map((result, i) =>(
                
                <Toggle
                    name = {result}
                />
            ))}
        </>
        
        
        ,
        Securiprivacy: <Securiprivacy/>,
        Geolocation: <Geolocation
            clicked = {locationHandler}


            location = {results}
            
        
        />,
        Account: <Account/>,
        streamingkey: <KeyContainer
            onClick = {postStreamKey}
        />,
        streamGuide: <streamGuide/>

}










    return (
        
            <div id = "settings-page">
            <aside>
                <h1>Settings</h1>
                <ul>
                    <li tabIndex="1" className = "nav-item active border-bottom">
                        <a className = "nav-link" type = "button" onClick={() => setComponent("Notifications")}>Notifications</a>
                    </li>
                    <li  tabIndex="1"className = "nav-item border-bottom" >
                        <a className = "nav-link" type = "button" onClick = {() => setComponent("Geolocation")}>Geolocation</a>
                    </li>
                    <li  tabIndex="1"className = "nav-item border-bottom" >
                        <a className = "nav-link" type = "button" onClick = {() => setComponent("Securiprivacy")}>Security & Privacy</a>
                    </li>
                    <li  tabIndex="1" className = "nav-item border-bottom" >
                        <a className = "nav-link" type = "button" onClick = {() => setComponent("Account")}>Account</a>
                    </li>
                    <li  tabIndex="1" className = "nav-item border-bottom" >
                        <a className = "nav-link" type = "button" onClick = {() => setComponent("streamingkey")}>StreamingKey</a>
                    </li>
                    <li  tabIndex="1" className = "nav-item border-bottom" >
                        <a className = "nav-link" type = "button" onClick = {() => setComponent("streamGuide")}>Stream Guide</a>
                    </li>
                </ul>
            </aside>
            <header></header>
            <sectio>
            {componentMap[component]}

            </sectio>
            <sectio></sectio>
            
            <main></main>
        </div>
        
    )
}


export default Settings;