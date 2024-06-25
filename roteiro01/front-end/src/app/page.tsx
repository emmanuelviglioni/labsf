import Image from "next/image";
import List from './components/List/List';
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <main className="flex bg-white h-full min-h-screen flex-col items-center justify-between p-24">
        <List />
      </main>
    </>

  );
}
