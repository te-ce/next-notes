import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Notes } from "./components/Notes";

export default function Home() {
  return (
    <div className="grid min-h-screen grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <Header />
      <main className="row-start-2 flex flex-col items-center gap-8 sm:items-start">
        <Notes />
      </main>
      <Footer />
    </div>
  );
}
