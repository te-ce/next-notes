"use client";
import { useNotesStore } from "../stores/notesStore";
export interface Note {
  id: string;
  description: string;
  author: string;
}

export const Note = ({ note }: { note: Note }) => {
  const deleteNote = useNotesStore((state) => state.delete);

  return (
    <div className="flex min-w-52 flex-col items-start justify-center rounded-lg border border-cyan-900 p-4 shadow-lg shadow-cyan-500/50">
      <div className="flex w-full items-center justify-between pb-3">
        <h2 className="bold text-xl text-slate-400">{note.author}</h2>
        <button className="px-4 py-1" onClick={() => deleteNote(note.id)}>
          x
        </button>
      </div>
      <div>{note.description}</div>
    </div>
  );
};
