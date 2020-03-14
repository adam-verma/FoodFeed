import React from "react";


const Account = (props) =>(


<div>
    <h1>Manage Account</h1>
    <div className = "card security-security">
        <label>Delete Account</label>
        <div class="card-body">
            <p>WARNING: Once do you this, you cannot get your information back.</p>
            <button className = "security-btn" type = "button">Delete My Account</button>
        </div>
    </div>
</div>


)



export default Account;