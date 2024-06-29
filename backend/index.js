const express = require("express");
const app = express();
const {createTodo, updateTodo} = require("./types");
app.use(express.json);

app.post("/todo", (req, res) => {
    const createPayload = req.body;
    const parsedPayoad = createTodo.safeParse(createPayload);
    if(!parsedPayoad.success){
        res.status(411).json({
            msg : "You sent the wront inputs",
        })
        return;
    }
});
app.get("/todo", (req, res) => {

});
app.put("/completed", (req, res) => {
    const updatePayload = req.body;
    const parsedPayoad = updateTodo.safeParse(updatePayload);
    if(!parsedPayoad.success){
        res.status(411).json({
            msg : "You sent the wront inputs",
        })
        return;
    }
});

app.listen(3000, console.log("Server listening on port 3000"));
