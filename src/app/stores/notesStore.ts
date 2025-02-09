import { create } from "zustand";
import { devtools } from "zustand/middleware";
import type { } from "@redux-devtools/extension"; // required for devtools typing
import { Note } from "../components/Note";

interface NoteState {
  notes: Note[];
  add: (note: Note) => void;
  delete: (id: string) => void;
}

const notes: Note[] = [
  { author: "author1", description: "lorem ipsum", id: "1234" },
  { author: "author2", description: "lorem ipsum", id: "752" },
];

export const useNotesStore = create<NoteState>()(
  devtools(
    (set) => ({
      notes: [...notes],
      add: (note) => set((state) => ({ notes: [...state.notes, note] })),
      delete: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
    }),
    {
      name: "note-storage",
    },
  ),
);
