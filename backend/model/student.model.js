const { default: mongoose } = require("mongoose");


const student = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    institution:{
        type:String
    },
    profession:{
        type:String
    }

},{timestamps:true})

module.exports.studentSchema = mongoose.model("students",student)