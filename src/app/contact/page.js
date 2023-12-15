import MyHeader from "@/component/header/page";
import Link from "next/link";

export default function Contact() {
   return (
      <main className="row">
         <MyHeader />
         <div className="flex flex-col items-center justify-between p-24">
            <h3 className="font-bold tracking-widest">aniket.sharma@moreideas.ae</h3>
         </div>
      </main>
   );
}