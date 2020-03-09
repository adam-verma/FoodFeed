import React, { useState, useEffect } from "react";
import "./styles/settings/style.css";

import Notifications from "../components/SettingsGroup/notifications.js";


import Securiprivacy from "../components/SettingsGroup/securiprivacy.js";
import Geolocation from "../components/SettingsGroup/geolocation.js";
import Account from "../components/SettingsGroup/account.js";
import Toggle from "../components/SettingsGroup/toggle.js";


// TODO:This is not a real import. This helps me follow a train of thought. REMOVE AFTER DONE.
import MongooseData from "mongoose";


const Settings = (props) => {
    const [component, setComponent] = useState("Notifications");
    const [results, setResults] = useState([]);

    const exampleChefs = ["Murphy","21 Savage", "23 Savage", "Joe Mama"];



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
        Geolocation: <Geolocation/>,
        Account: <Account/>

}










    return (
        <React.Fragment>
            <aside>
                <h1>Settings</h1>
                <ul>
                    <li tabIndex="1" className = "nav-item active">
                        <a className = "nav-link" type = "button" onClick={() => setComponent("Notifications")}>Notifications</a>
                    </li>
                    <li  tabIndex="1"className = "nav-item" >
                        <a className = "nav-link" type = "button" onClick = {() => setComponent("Geolocation")}>Geolocation</a>
                    </li>
                    <li  tabIndex="1"className = "nav-item" >
                        <a className = "nav-link" type = "button" onClick = {() => setComponent("Securiprivacy")}>Security & Privacy</a>
                    </li>
                    <li  tabIndex="1" className = "nav-item" >
                        <a className = "nav-link" type = "button" onClick = {() => setComponent("Account")}>Account</a>
                    </li>
                    
                </ul>
            </aside>
            <header></header>
            <section>
            {componentMap[component]}

            </section>
            <section></section>
            
            <main></main>
            
        </React.Fragment>
    )
}


export default Settings;