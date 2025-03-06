import "dotenv/config";
import { eq } from "drizzle-orm";
import { db } from "../index.js";
import { notesTable } from "../schemas/schema.js";

export async function example() {
  const note: typeof notesTable.$inferInsert = {
    title: "MyNote",
    author: "John Doe",
    description: "lorem ipsum dolor sit amet",
  };

  await db.insert(notesTable).values(note);
  console.log("New note created!");

  const notes = await db.select().from(notesTable);
  console.log("Getting all notes from the database: ", notes);

  await db
    .update(notesTable)
    .set({
      description: "123",
    })
    .where(eq(notesTable.author, note.author));
  console.log("Note info updated!");

  await db.delete(notesTable).where(eq(notesTable.author, note.author));
  console.log("User deleted!");
}
