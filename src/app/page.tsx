import Image from "next/image";

export default function Home() {
  return(
    // <div className="bg-[url('/images/pic.webp')] h-[400px] bg-no-repeat w-full bg-cover">
    <div className="text-primary bg-secondary">
      {/* <h2 className="bg-blue-500 p-[25px] m-[10px]">Hello world</h2> */}
      {/* <h2 className="bg-blue-500 p-[25px] my-[10px]">Hello world</h2> */}
      {/* <h2 className="bg-blue-500 pl-[200px] text-3xl my-[10px]">Hello world</h2> */}
      {/* <h2 className="bg-[#0866FF] pl-[200px] text-[36px] my-[10px]">Hello world</h2> */}
      {/* <h2 className="bg-[#0866FF] pl-[200px] text-[36px] p-1 my-[10%]">Hello world</h2> */}
      <h2 className="text-primary my-[10%] bg-secondary text-[36px] ">Hello world second time</h2>
    </div>
  )
}