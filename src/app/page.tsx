import Image from "next/image";

export default function Home() {
  return (
    <div className="flex absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 flex-col">
      <a href="/test"><button className="w-30 p-3 border-solid border-2 border-black rounded mb-3 hover:bg-slate-300 ease-in duration-75 hover:duration-150">Test your knowledge</button></a>
      <button className="w-30 p-3 border-solid border-2 border-black rounded mt-3 hover:bg-slate-300 ease-in duration-75 hover:duration-150">Start memorizing</button>
    </div>
  );
}
