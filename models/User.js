
let mongoose = require('mongoose'),
    bcrypt   = require('bcryptjs'),
    shortid = require('shortid')
    
 const Schema = mongoose.Schema;
 
const UserSchema = new Schema({
    username: String,
    email : String,
    password: String,
    stream_key : String,
});
 
UserSchema.methods.generateHash = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};
 
UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};
 
UserSchema.methods.generateStreamKey = () => {
    return shortid.generate();
};
 
 
module.exports = mongoose.model('user', UserSchema); 
















//Old code will delete when models works 

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;
// // Create Schema
// const ViewerSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     match: [/.+\@.+\..+/, 'Please fill a valid email address'],
//     required: 'Email is required'
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   },
//   stream_key:{
//     type: String

//   }
// });
// module.exports = Viewer = mongoose.model("viewers", ViewerSchema);