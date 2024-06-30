const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:Agar%402002**@cluster0.e3cakxu.mongodb.net/Todos", console.log("MongoDB connected"))

const todoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo : todo
}