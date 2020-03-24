import React from "react";
import Wave from  "../../Images/wave.png";
import "./signup.css";


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Register(props) {
  return (
<React.Fragment>
    <img className="wave" src = {Wave}  alt="wave"/>
    <div className="container app mt-5" key = {props.appendClass}>
    <h4>Register</h4>
 
    <hr className="my-4" />
 
    <div className="formSignup" id = "row">
        <form action="/signup"
              method="post"
              >
 
            <div className="form-group" id = "formSignup">
                <label>Username</label>
                <input type="text" name="username" className="form-control" placeholder="Enter username" required />
              
                    <small className="form-text text-danger"></small>
               
            </div>
 
            <div className="form-group" id = "formSignup">
                <label>Email address</label>
                <input type="email" name="email" className="form-control" placeholder="Enter email" required/>
              
                    <small className="form-text text-danger"></small>
                
            </div>
 
            <div className="form-group" id = "formSignup">
                <label>Password</label>
                <input type="password" name="password" className="form-control" placeholder="Password" required/>
            </div>
 
            <div className="form-group" id = "formSignup">
                <div className="account">
                    Have an account? Login <a href="/login">here</a>.
                </div>
            </div>
 
            <button type="submit" className="btn btn-dark btn-block" id = "formSignup">Register</button>
        </form>
    </div>
</div>
</React.Fragment>
  );
}

export default Register;






