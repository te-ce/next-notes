import { z } from "zod";

export const noteSchema = z.object({
  author: z.string(),
  description: z.string(),
  id: z.string(),
});
export const notesSchema = z.array(noteSchema);
export type Note = z.infer<typeof noteSchema>;
