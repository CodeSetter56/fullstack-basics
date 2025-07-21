import fs from "fs";

export const createNote = (req, res) => {
  const { title, details } = req.body;
  const filename = title.replace(/\s+/g, "-").toLowerCase(); // Replace spaces with hyphens and convert to lowercase
  
  fs.writeFile(`./notes/${filename}.txt`, details, (err) => {
    if (err) {
      console.error("Error writing file:", err);
      return res.status(500).send("Error creating note");
    }
    console.log("Note created successfully");
    res.redirect("/");
  });
};
