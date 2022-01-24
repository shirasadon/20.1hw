
const express = require('express')
const app = express()
const mongoose = require("mongoose");
const { Schema } = mongoose;

 
const studentSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  grade:{
type: Schema.Types.ObjectId,
ref: "Grades"
  }
   
   
})

const Student = mongoose.model("Student", studentSchema);
module.exports= Student;

