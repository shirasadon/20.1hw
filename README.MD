In this project I used dependencies: Express, Mongos
There is a Models folder and a Public folder.
The Models folder has the models I created for the data that will go into the database, a student model whose students will enter the database by consent, and a grade model with an agreement on how scores will go into the database.
In the Public folder is the index file brought by the Midlower app.use (express.static ("public"));
I created a connection to a database with conditions for connecting to the server instance.
I created a rout that puts students in the database
I created a rout that puts scores into the database
Rout that returns all students in the database (fetch-index.html)
Rout that returns all students in the database (get-index.html)
A rout that returns the student by name in query params