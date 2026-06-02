import { useState } from "react";
import data from "../data.json";
export default function Vans() {
  const [color, setColor] = useState("");
  const [displayVans, setDisplayvans] = useState(data.vans);
  function handleClick(event) {
    const vans = data.vans.filter(
      (items) => event.target.value === items.style,
    );
    setColor(event.target.value);
    setDisplayvans(vans);
  }
  function handleFilter() {
    setDisplayvans(data.vans);
    setColor("");
  }

  return (
    <div className="bg-[#FFF7ED]  w-full pt-30 md:pr-10 pl-8 min-h-screen">
      <div className="flex flex-col justify-center  md:flex-row md:justify-between items-center">
        <h1 className=" font-bold md:text-2xl  mb-4">
          Explore our van options
        </h1>
        <div className="flex flex-wrap gap-4 pb-10 md:gap-8 justify-center items-center">
          <button
            value="Simple"
            onClick={(event) => handleClick(event)}
            className={`${color === "Simple" ? "bg-[#E17654] text-[#FFEAD0]" : "bg-[#FFEAD0] text-[#4D4D4D]"} hover:bg-[#E17654] hover:text-[#FFEAD0] px-2  md:px-4  rounded-[5px] py-1 font-medium `}
          >
            Simple
          </button>
          <button
            value="Luxury"
            onClick={handleClick}
            className={`${color === "Luxury" ? "bg-[#161616] text-[#FFEAD0]" : "bg-[#FFEAD0] text-[#4D4D4D]"} hover:bg-[#161616] hover:text-[#FFEAD0] px-4  rounded-[5px] py-1 font-medium `}
          >
            Luxury
          </button>
          <button
            value="Rugged"
            onClick={handleClick}
            className={`${color === "Rugged" ? "bg-[#115E59] text-[#FFEAD0]" : "bg-[#FFEAD0] text-[#4D4D4D]"} hover:bg-[#115E59] hover:text-[#FFEAD0] px-4  rounded-[5px] py-1 font-medium `}
          >
            Rugged
          </button>
          <p
            onClick={() => handleFilter()}
            className="underline cursor-pointer text-[20px]"
          >
            Clear filter
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8 place-items-center pb-8 lg:grid-cols-4">
        {displayVans.map((item) => {
          return (
            <div key={item.name} className="max-w-60 w-57.5 ">
              <img src={item.imageUrl} alt="vans" />
              <div className="flex justify-between">
                <h1 className="font-semibold text-[20px]">{item.name}</h1>
                <p className="text-[20px] font-semibold">{item.price}</p>
              </div>
              <div className="flex  justify-between">
                <button
                  className={`mt-3 ${item.style === "Simple" ? "bg-[#E17654]" : item.style === "Rugged" ? "bg-[#115E59]" : "bg-[#161616]"} px-4 py-1 rounded-[5px] text-[#FFEAD0]`}
                >
                  {item.style}
                </button>
                <span className="text-[14px] -mt-1.5">/day</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
