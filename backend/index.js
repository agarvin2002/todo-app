const express = require("express");
const app = express();
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
app.use(express.json());

app.post("/todo", async (req, res) => {
  const createPayload = req.body;
  const parsedPayoad = createTodo.safeParse(createPayload);
  if (!parsedPayoad.success) {
    res.status(411).json({
      msg: "You sent the wront inputs",
    });
    return;
  }
  await todo.create({
    tite: createPayload.tite,
    description: createPayload.description,
    completed : false
  });
  res.json({
    msg: "Todo created",
  });
});
app.get("/todos", async (req, res) => {
  const todos = await todo.find({});
  res.json({
    todos,
  });
});
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parsedPayoad = updateTodo.safeParse(updatePayload);
  if (!parsedPayoad.success) {
    res.status(411).json({
      msg: "You sent the wront inputs",
    });
    return;
  }
  await todo.update({
    _id : req.body.id,
  },{
    completed :true,
  })
  res.json({
    msg: "Todo marked as completed"
  })
});

app.listen(3000, console.log("Server listening on port 3000"));
