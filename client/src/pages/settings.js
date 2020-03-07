import React from "react";
import "./styles/settings/style.css";



const Settings = () => {





    return (
        <React.Fragment>
            <aside>
                <h1>Settings</h1>
                <ul style="list-style: none;">
                    <li className = "nav-item" >
                        <a className = "nav-link">Notifications</a>
                    </li>
                    <li className = "nav-item" >
                        <a className = "nav-link">Geolocation</a>
                    </li>
                    <li className = "nav-item" >
                        <a className = "nav-link">Security & Privacy</a>
                    </li>
                    <li className = "nav-item" >
                        <a className = "nav-link">Account</a>
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