import Image from "next/image";
import List from './components/List';
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <main className="flex bg-white h-[calc(100vh-240px)] min-h-screen flex-col items-center justify-between p-24">
        <List />
      </main>
    </>

  );
}
