import MyHeader from "@/component/header/page";
import Link from "next/link";

export default function About() {
   return (
      <main className="row">
         <MyHeader />
         <div className="flex flex-col items-center justify-between p-24">
            <h3 className="font-bold tracking-widest">Hi, I'm Aniket Sharma from India.</h3>
         </div>
      </main>
   );
}