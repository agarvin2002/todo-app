const express = require("express");
const app = express();
const {createTodo, updateTodo} = require("./types");
app.use(express.json);

app.post("/todo", (req, res) => {

});
app.get("/todo", (req, res) => {

});
app.put("/completed", (req, res) => {

});

app.listen(3000, console.log("Server listening on port 3000"));
