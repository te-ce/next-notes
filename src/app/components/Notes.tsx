"use client";

import { useNotesStore } from "../stores/notesStore";
import { Note } from "./Note";

export const Notes = () => {
  const notes = useNotesStore((state) => state.notes);

  return (
    <>
      {notes.map((note, index) => (
        <Note key={index} note={note} />
      ))}
    </>
  );
};
