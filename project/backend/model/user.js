const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");

const userSchema = mongoose.Schema({
    googleId : {
        type : String,
        default : null
    },
    name : {
        type : String,
        required : [true , "Name is required"],
        minlength : [3 , "Name should be atleast 3 charater long"],
        maxlength : [50, "Name cannot exceed 50 charaters"],
        validate :  {
            validator : function(value){
                return validator.isAlpha(value , "en-US" , {ignore : " "});
            },
            message : "Name should be in String"
        }
    },
    email : {
        type : String,
        required :  [true , "Email is required"],
        unique : true,
        validate :  {
            validator : function(value){
                return validator.isEmail(value);
            },
            message : "Email should be in valid format"
        }
    },
    password : {
        type : String,
        required : function(){
            return !this.googleId;
        },
        maxlength : [128, "Password cannot exceed 128 charater"],
        validate : {
            validator : function(value){
                if(this.googleId){
                    return true;
                }
                
                return validator.isStrongPassword(value,{
                    minLength : 8,
                    minLowercase : 1,
                    minUppercase : 1,
                    minNumbers : 1,
                    minSymbols : 1            
                })
            },
            message :  "Password must be stronger"
        },
    },
    phoneNumber : {
        type : String,
        required : function(){
            return !this.googleId;
        },
        validate : {
            validator : function(value){
                if(this.googleId){
                    return true;
                }
                return validator.isMobilePhone(value , "en-IN")
            },
            message : "Phone number should be valid"
        }
    },
    role : {
        type : String,
        required : [true,"Role is required"],
        enum : ["User","Admin"],
        default : "User"
    }
});

userSchema.pre("save",async function(next){
    
    const user = this;
    if(!user.isModified("password") || user.googleId) return next();
    const hashedPassword = await bcrypt.hash(user.password , 10);
    user.password =  hashedPassword;
    next();
})

module.exports = mongoose.model("User" , userSchema);


// const mongoose = require("mongoose");
// const validator = require("validator");
// const bcrypt = require("bcrypt");


// const userSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required: [true, "Name is required"],
//         minlength: [3, "Name should be atleast 3 char long"],
//         maxlength: [50, "Name cannot exceed 50 char"],
//         validate: {
//             validator: function (value) {
//                 return validator.isAlpha(value, "en-US", { ignore: " " });
//             },
//             message: "Name should be in String"
//         }
//     },
//     email: {
//         type: String,
//         required: [true, "Email is required"],
//         unique: true,
//         validate: {
//             validator: function (value) {
//                 return validator.isEmail(value);
//             },
//             message: "Email should be in valid format"
//         }
//     },
//     password: {
//         type: String,
//         required: [true, "Password is required"],
//         minlength: [8, "Password should be atleast 3 char long"],
//         maxlength: [128, "Password cannot exceed 128 char"],
//         validate: {
//             validator: function (value) {
//                 return validator.isStrongPassword(value, {
//                     minlength: 8,
//                     minLowercase: 1,
//                     minUppercase: 1,
//                     minNumbers: 1,
//                     minSymbols: 1
//                 })
//             },
//             message: "Create a strong password"
//         }
//     },
//     phoneNumber: {
//         type: String,
//         required: [true, "Enter a mobile no."],
//         validate: {
//             validator: function (value) {
//                 return validator.isMobilePhone(value, "en-IN")
//             },
//             message: "Phone no. is required"
//         }
//     }
// });


// userSchema.pre("save", async function (next) {
//     // console.log("before saving the docs and  & after validation the schema");

//     const user = this;
//     if (!user.isModified("password")) {
//         return next();
//     }
//     // console.log(user);
//     const hashedPassword = await bcrypt.hash(user.password, 10);
//     user.password = hashedPassword;
//     next();

// })

// module.exports = mongoose.model("User", userSchema);