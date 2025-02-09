import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { NoteForm } from "./components/NoteForm";
import { Notes } from "./components/Notes";
import db from "../utils/firestore";
import { collection, getDocs } from "firebase/firestore";
import { notesSchema } from "@/schemas/note";

export default async function Home() {
  const querySnapshot = await getDocs(collection(db, "notes"));
  const notes = notesSchema.parse(
    querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    })),
  );

  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Header />
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <NoteForm />
        <Notes notes={notes} />
      </main>
      <Footer />
    </div>
  );
}
