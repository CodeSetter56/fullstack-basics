import fs from "fs";

export const createNote = (req, res) => {
  // Extract title and details from the request body using name attribute of input
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

export const getNote = (req, res) => {
  const { slug } = req.params;

  fs.readFile(`./notes/${slug}.txt`, "utf-8", (err, details) => {
    const title = slug.replace(/\.txt$/, "").replace(/-/g, " ");
    //switch to showNote.ejs
    res.render("showNote", { details, title });
  });
};

//just to fill the previous details before editing
export const showEditNote = (req, res) => {
  const { slug } = req.params;
  fs.readFile(`./notes/${slug}.txt`, "utf-8", (err, details) => {
    const title = slug.replace(/-/g, " ");
    res.render("editNote", { details, title, slug });
  });
};

export const editNote = (req, res) => {
  const { slug: oldSlug } = req.params;
  const { title: newTitle, details: newDetails } = req.body;

  const newSlug = newTitle.replace(/\s+/g, "-").toLowerCase();
  const oldFilePath = `./notes/${oldSlug}.txt`;
  const newFilePath = `./notes/${newSlug}.txt`;

  //write the new details to the new file
  fs.writeFileSync(newFilePath, newDetails);

  // If the title changed, the filename is different, so we delete the old file.
  if (oldFilePath !== newFilePath) {
    fs.unlinkSync(oldFilePath);
  }

  res.redirect("/");
};

export const deleteNote = (req, res) => {
  const { slug } = req.params;
  const filePath = `./notes/${slug}.txt`;
  fs.unlinkSync(filePath);
  res.redirect("/");
};
