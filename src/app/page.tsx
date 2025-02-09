import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Note } from "./components/Note";

const Notes: Note[] = [
  { author: "author1", title: "title1", description: "lorem ipsum" },
  { author: "author2", title: "title2", description: "lorem ipsum" },
];
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {Notes.map((note, index) => (
          <Note key={index} note={note} />
        ))}
      </main>
      <Footer />
    </div>
  );
}
