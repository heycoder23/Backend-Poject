const express = require("express");
const noteModel = require("./models/notes.model");
const app = express();
app.use(express.json());

app.post("/api/notes", async (req, res) => {
  console.log(req.body);
  const { title, desc } = req.body;
  const note = await noteModel.create({
    title,
    desc,
  });

  res.status(201).json({ message: "created notes ", note });
});

app.get("/api/notes", async (req, res) => {
  const notes = await noteModel.find();

  res.status(200).json({
    message: "your details ",
    notes,
  });
});

app.delete("/api/notes/:id", async (req, res) => {
  const idx = req.params.id;
  await noteModel.findByIdAndDelete(idx);
  res.status(200).json({
    message: "deleted id printed in console",
    idx,
  });
});

app.patch("/api/notes/:id", async (req ,res )=>{
    const idx = req.params.id
    const {desc} = req.body
    const note = await noteModel.findByIdAndUpdate(idx,{desc})
    res.status(200).json({
        message:" updated successfully",
        note
    })
})
module.exports = app;
