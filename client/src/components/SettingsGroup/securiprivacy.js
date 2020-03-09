import React from "react";


const Securiprivacy = (props) =>(

    <div>
        <h1>Security</h1>

            
        <div className = "card security-security">
        <label>Change Your Password</label>
            <div class="card-body">
                <p>It's a good idea to change your password once in a while</p>
                <button className = "security-btn" type = "button">Change Password</button>
            </div>
        </div>
        
        <div className = "card security-security">
            <label>Change Your Password</label>
            <div class="card-body">
                <p>Double-secure your account by enabling Two-factor authentication. You will not only need your password but also a mobile phone to log in.</p>
                <button className = "security-btn" type = "button">Enable Two-Factor Authentication</button>
            </div>
        </div>
        

        <br></br>
        <br></br>
        <h1>Privacy</h1>

        <div className = "card security-security">
        <label>Blocked Users</label>
            <div class="card-body">
                <p>View or un-block members here.</p>
                <button className = "security-btn" type = "button">View</button>
            </div>
        </div>






    </div>

)



export default Securiprivacy;