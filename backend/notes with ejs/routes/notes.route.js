import express from "express";
import { createNote } from "../controllers/notes.controllers.js";

const router = express.Router();

router.post("/create",createNote)

export default router;