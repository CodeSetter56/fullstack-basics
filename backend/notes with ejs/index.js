import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import fs from "fs"

import notesRouter from "./routes/notes.route.js";

// Get the current filename and directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 3000;

// Set up EJS as the view engine
app.set("view engine", "ejs");
app.set("views", "./views");
// Use the new __dirname variable
app.use(express.static(path.join(__dirname, "public")));

// Middleware to allow parsing of JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/notes",notesRouter);

app.get("/", (req, res) => {
  // Check if the 'notes' directory exists
  if (!fs.existsSync('./notes')) {
    fs.mkdirSync('./notes'); // Create it if it doesn't exist
  }

  fs.readdir(`./notes`, (err, files) => {
    //Map over the filenames to create an array of note objects
    const notes = files.map(filename => {
      const details = fs.readFileSync(`./notes/${filename}`, "utf-8");
      const slug = filename
      const title = filename.replace(/\.txt$/, '').replace(/-/g, ' ');

      return { title, details, slug };
    });

    res.render("index", { notes });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
