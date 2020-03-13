 
import React from "react";
import Wave from  "../../Images/wave.png"


// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Register(props) {
  return (
<React.Fragment>
    <img className="wave" src = {Wave}  alt="wave"/>
    <div className="container app mt-5">
    <h4>Register</h4>
 
    <hr className="my-4" />
 
    <div className="row">
        <form action="/signup"
              method="post"
              >
 
            <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" className="form-control" placeholder="Enter username" required />
              
                    <small className="form-text text-danger"></small>
               
            </div>
 
            <div className="form-group">
                <label>Email address</label>
                <input type="email" name="email" className="form-control" placeholder="Enter email" required/>
              
                    <small className="form-text text-danger"></small>
                
            </div>
 
            <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" className="form-control" placeholder="Password" required/>
            </div>
 
            <div className="form-group">
                <div className="account">
                    Have an account? Login <a href="/login">here</a>.
                </div>
            </div>
 
            <button type="submit" className="btn btn-dark btn-block">Register</button>
        </form>
    </div>
</div>
</React.Fragment>
  );
}

export default Register;









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