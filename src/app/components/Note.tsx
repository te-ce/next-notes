export interface Note {
  title: string;
  description: string;
  author: string;
}

export const Note = ({ note }: { note: Note }) => {
  return (
    <div className="flex flex-col justify-center shadow-lg items-start p-4 shadow-cyan-500/50 border-cyan-900 rounded-lg border">
      <h2 className="text-xl text-slate-400 bold pb-3">{note.title}</h2>
      <div>{note.description}</div>
      <div className="self-end pt-1 italic text-slate-500">- {note.author}</div>
    </div>
  );
};
