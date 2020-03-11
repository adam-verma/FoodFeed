import React from "react";
import "./login.css"
import Wave from  "../../Images/wave.png"
import Burger from "../../Images/van.svg"
import Profile from "../../Images/profile.svg"
import Van from "../../Images/break.svg"

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually

function Login(props) {
    console.log()
  return (
 <React.Fragment>
        <img className="wave" src = {Wave} />
        
        <div className = "row">
        
              
            <div className="col-md-6">
                <img className="van" id="van" src={Burger}/>           
            </div>

            <div className="login-container  col-md-6" >
                <form action ="/login" method ="post">
                    <img  className="profile" src = {Profile}/>
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
                    <input type="submit" className="btn" value="Login" />
                    
                
                 </form>
                </div>
               
            </div>
            
        
       
</React.Fragment>
  );
}

export default Login;











//keep this code until the code above works/--------///
// import React, { Component } from "react";
// import { Link  } from "react-router-dom";
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { loginUser } from "../../actions/authActions";
// import classnames from "classnames";
// class Login extends Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//       errors: {}
//     };
//   }
// componentWillReceiveProps(nextProps) {
//     if (nextProps.auth.isAuthenticated) {
//         window.location.href = "/chat"
// // push user to dashboard when they login
//     }
// if (nextProps.errors) {
    

//       this.setState({
//         errors: nextProps.errors
        
//       });
//     }
//   }
// onChange = e => {
//     this.setState({ [e.target.id]: e.target.value });
//   };
// onSubmit = e => {
//     e.preventDefault();
// const userData = {
//       email: this.state.email,
//       password: this.state.password
//     };
// this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
//   };
// render() {
//     const { errors } = this.state;
//     console.log(errors.data)
// return (
//     <React.Fragment>
// <form noValidate onSubmit={this.onSubmit}>
// <div className="form-group">
//      <span>{errors.email} {errors.emailnotfound}</span>
//   <label for="exampleInputEmail1">Email address</label>
//   <input
//         onChange={this.onChange}
//         value={this.state.email}
//         error={errors.email}
//         id="email"
//         type="email"
//         className={classnames("", {
//             invalid: errors.email || errors.emailnotfound
//          })} 
//   />
  
//   <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
// </div>
// <div className="form-group">
//   <label for="exampleInputPassword1">Password</label>
//   <input  onChange={this.onChange}
//                   value={this.state.password}
//                   error={errors.password}
//                   id="password"
//                   type="password"
//                   className={classnames("", {
//                     invalid: errors.password || errors.passwordincorrect
//                   })}
//      />
//      <p> {errors.password}
//          {errors.passwordincorrect}</p>

// </div>
// <div className="form-group form-check">
//   <input type="checkbox" className="form-check-input" id="exampleCheck1" />
//   <label className="form-check-label" for="exampleCheck1">Check me out</label>
// </div>
// <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// </React.Fragment>
//     )
//   }
// }
// Login.propTypes = {
//   loginUser: PropTypes.func.isRequired,
//   auth: PropTypes.object.isRequired,
//   errors: PropTypes.object.isRequired
// };
// const mapStateToProps = state => ({
//   auth: state.auth,
//   errors: state.errors
// });
// export default connect(
//   mapStateToProps,
//   { loginUser }
// )(Login);