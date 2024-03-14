import Image from "next/image";

function PiDay() {
  const currentTime = new Date();
  // March is the 3d month, but indexing starts at 0 so it is 2
  if(currentTime.getMonth() === 2 && currentTime.getDate() === 14) {
    if(currentTime.getFullYear() === 2024) {
      return <span className="text-2xl absolute top-5 right-1/2 translate-x-1/2">It is pi day today!</span>
    }
    return <span className="text-2xl absolute top-5 right-1/2 translate-x-1/2">It is pi day! Just a diffrent year :)</span>
  } else {
    return <span className="text-2xl absolute top-5 right-1/2 translate-x-1/2">It is not pi day :(</span>
  }
}

export default function Home() {
  return (
    <div className="w-lvw h-lvh text-center" id="wrapper">
      <PiDay />
      <div className="flex absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 flex-col">
        <button>Test your knowledge</button>
        <button>Start memorizing</button>
      </div>
    </div>
  );
}
