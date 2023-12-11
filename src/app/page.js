import Link from "next/link";

export default function Home() {
  return (
    <main className="row">
      <div className="text-center  pt-4">
        <h1 className="text-2xl font-bold">Aniket Sharma</h1>
      </div>
      <div className="w-500 mx-auto mt-4">
        <ul className="flex justify-evenly ">
          <li className="underline underline-offset-8"><Link href="/">Home</Link></li>
          <li className="underline underline-offset-8"><Link href="/about">About</Link></li>
          <li className="underline underline-offset-8"><Link href="/work">Work</Link></li>
          <li className="underline underline-offset-8"><Link href="/contact">Contact</Link></li>
        </ul>
      </div>
    </main>
  )
}
