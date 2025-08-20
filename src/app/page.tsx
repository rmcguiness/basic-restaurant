import Image from "next/image";
import { Card } from "@/components/card";
import { GlassCircle } from "@/components/glass/circle/glass-circle";


export default function Home() {
  return (
    <div className="font-sans items-center min-h-screen">
      <header className="flex gap-2 w-full justify-between px-8 py-4 ">
        <div className="flex items-center gap-2">
          <Image src="/favicon.ico" alt="logo" width={25} height={25} />
          <h1 className="text-2xl font-bold">Restaurant</h1>
        </div>
        <div className="flex items-center gap-2">
          <button>Home</button>
          <button>Menu</button>
          <button>Contact</button>
        </div>
      </header>
      <main className="flex flex-col max-w-5xl mx-auto px-4">
        <div className="flex flex-col justify-center mx-auto">
          <h1 className=" text-4xl font-bold">What We Bring To The Table</h1>
          <div className="flex w-full justify-center">

            <GlassCircle />

          </div>
        </div>

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">

      </footer>
    </div>
  );
}
