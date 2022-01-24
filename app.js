// const { query } = require("express");
const express = require("express");
const app = express();
const port = 3000;
var mongoose = require("mongoose");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));



Student = require("./models/students");
Grades = require("./models/grades");

var mongoDB = "mongodb://127.0.0.1/students-grades";
mongoose
  .connect(mongoDB)
  .then(() => {
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((e) => console.error(e));

app.get("/students", (req, res) => {
  const student = new Student({
    name: "ari",
    age: 10,
    grade: 80,
  });
  student.save((err, contact) => {
    console.log(err);
    console.log(contact);
  });
});

app.get("/grades", (req, res) => {
  const grades = new Grades({
    grade: 80,
  });
  grades.save((err, contact) => {
    console.log(err);
    console.log(contact);
  });
});

// fetch 1
app.get("/all-students", async (req, res) => {
  const users = await Student.find();
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});
// get 2
app.get("/student-name", async (req, res) => {
  const users = await Student.find(req.query);
  console.log(users);
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/name", async (req, res) => {
  const users = await Student.find(req.query);
  console.log(users);
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

// app.get("/grades", async (req, res) => {
//   const grades = await Grades.find({});
//   try {
//     res.send(grades);
//   } catch (error) {
//     res.status(500).send(error);
//   }
// });

app.delete("/delete-student-name", async (req, res) => {
  const deleteStudent =parseInt(req.body.id)
  try {
    res.send(deleteStudent);
  } catch (error) {
    res.status(500).send(deleteStudent);
  }
});

app.delete("/student-id", async (req, res) => {
  const deleteStudent = await Students.findOneAndDelete(req.query);
  try {
    res.send(deleteStudent);
  } catch (error) {
    res.status(500).send(deleteStudent);
  }
});



app.get("/top-grade", async (req, res) => {
  const users = await Student.find(grades);
  console.log(users);
  try {
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});