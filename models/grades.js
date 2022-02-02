const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { Schema } = mongoose;
const gradesSchema = Schema({
 student_id: {
    type: Schema.Types.ObjectId,
    ref: "Student"
},
 grade:Number
});

const Grades = mongoose.model("Grades", gradesSchema);

module.exports = Grades;
