import { Hono } from "hono";
import { db } from "../index.js";
import { notesTable } from "../schemas/schema.js";

const notes = new Hono();

notes.get("/", async (c) => c.json(await db.select().from(notesTable)));
notes.post("/", (c) => c.json("create a note", 201));
notes.get("/:id", (c) => c.json(`get ${c.req.param("id")}`));

export default notes;
