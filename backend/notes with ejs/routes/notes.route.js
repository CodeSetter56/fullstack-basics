import express from "express";
import { createNote, deleteNote, editNote, getNote, showEditNote } from "../controllers/notes.controllers.js";

const router = express.Router();

//route: notes/
router.post("/create",createNote)
router.get("/file/:slug",getNote)

router.get("/edit/:slug",showEditNote)
router.post("/edit/:slug",editNote)

router.post("/delete/:slug",deleteNote)

export default router;