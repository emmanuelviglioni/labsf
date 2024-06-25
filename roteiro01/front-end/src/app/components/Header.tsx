'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation'

export default function Header() {
    const pathname = usePathname()

    return (
        <header className="flex justify-center items-center flex-col w-full py-4 px-5 gap-20 h-60">
            <section className="flex items-center justify-between w-full max-w-7xl">
                <Link href={"/"} className="text-4xl font-serif text-primary-green font-medium">To-do List</Link>
                <Link href={pathname === "/" ? "/register-page" : "/"}
                    className="bg-secondary-green text-white py-3 px-5 transition-colors duration-150 rounded hover:bg-[#4e7f25]">
                    {pathname === "/register-page" ? "Back to home" : "New Task"}
                </Link>
            </section>
            {pathname === "/" ? (
                <section className="flex items-end justify-start w-full max-w-7xl border-b-solid border-b-2 pb-6 gap-12">
                    <h2 className="text-7xl font-serif font-medium text-end">List</h2>
                    <p className="text-xl">3 items</p>
                </section>
            ) : pathname === "/register-page" &&(
                <section className="flex items-end justify-start w-full max-w-7xl border-b-solid border-b-2 pb-6 gap-12">
                    <h2 className="text-7xl font-serif font-medium text-end">Create a new task</h2>
                </section>
            )}
        </header>
    )
}