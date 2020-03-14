import React from "react";
import "./login.css"
import Wave from  "../../Images/wave.png"
import Burger from "../../Images/van.svg"
import Profile from "../../Images/profile.svg"


function Login(props) {
    console.log()
  return (
 <React.Fragment>
        <img className="wave" src = {Wave} alt="wave"/>
        
        <div className = "row loginDiv">
        
              
            
                <img className="van" id="van" src={Burger} alt="van"/>           
            

            <div className="login-container" >
                <form action ="/login" method ="post">
                    <img  className="profile" src = {Profile} alt="profile"/>
                    <h2>Welcome</h2>
                    <div className="input-div one">
                        
                        
                        
                        <div>
                        
                            
                            <input type="email" name="email" className="form-control" placeholder="Enter Email" required />
                             <small class="form-text text-danger"></small>
                        </div>
                </div>
                     <div className="input-div two">
                        
                        <div>
                        
                            <input type="password" name="password" className="form-control" placeholder="Password" required /> 
                        </div>
                    </div>
                    <div className="account">
                    Don't have an account? Sign Up Here <a href="/signup">here</a>.
                </div>
                    <input type="submit" className="btn" id="loginbtn" value="Login" />
                    
                
                 </form>
                </div>
               
            </div>
            
        
       
</React.Fragment>
  );
}

export default Login;










