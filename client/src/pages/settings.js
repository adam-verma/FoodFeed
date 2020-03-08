import React from "react";
import "./styles/settings/style.css";



const Settings = () => {





    return (
        <React.Fragment>
            <aside>
                <h1>Settings</h1>
                <ul>
                    <li tabindex="1" className = "nav-item" >
                        <a className = "nav-link" type = "button" >Notifications</a>
                    </li>
                    <li  tabindex="1"className = "nav-item" >
                        <a className = "nav-link" type = "button">Geolocation</a>
                    </li>
                    <li  tabindex="1"className = "nav-item" >
                        <a className = "nav-link" type = "button">Security & Privacy</a>
                    </li>
                    <li  tabindex="1" className = "nav-item" >
                        <a className = "nav-link" type = "button">Account</a>
                    </li>
                    
                </ul>
            </aside>
            <header></header>
            <section></section>
            <section></section>
            
            <main></main>
            
        </React.Fragment>
    )
}


export default Settings;