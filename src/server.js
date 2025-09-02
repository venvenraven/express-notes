import express from "express";
import bodyParser from "body-parser";
import {
  createNote,
  viewNote,
  updateNote,
  listNotes,
} from "./controllers/note.controller.js";

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(express.static('public'));

// Routes
app.post("/notes/create", createNote);          
app.get("/notes/list", listNotes);             
app.get("/notes/view/:id", viewNote);          
app.put("/notes/update/:id", updateNote);      


app.get("/", (req, res) => {
  res.send("Welcome to Express Notes API 🚀. Use /notes to get started.");
});


app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});