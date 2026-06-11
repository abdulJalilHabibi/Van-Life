import { useState } from "react";
import data from "../data.json";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function VanDetail() {
  const { id } = useParams();
  const van = data.vans.find((item) => item.id == id);

  return (
    <div className="pt-30 pr-10 pl-10 bg-[#FFF7ED]  flex flex-col gap-10 pb-20">
      <div className="flex gap-1  md:items-center ">
        <img className="w-4 " src="../../images/arrow.svg" alt="arrow" />
        <Link to=".." className="font-medium  underline cursor-pointer">
          Back to all vans
        </Link>
      </div>
      <div className="">
        <img className="mb-12" src={van.imageUrl} alt="img" />
        <button
          className={`mb-2 ${van.type === "Simple" ? "bg-[#E17654]" : van.type === "Rugged" ? "bg-[#115E59]" : "bg-[#161616]"} px-4 py-1 rounded-[5px] text-[#FFEAD0]`}
        >
          {van.type}
        </button>
        <h1 className="mb-2 font-semibold text-[32px]">{van.name}</h1>
        <p className=" mb-2 text-[24px] font-semibold">
          {van.price}
          <span className="text-[16px] -mt-1.5">/day</span>
        </p>
        <p className="mb-2 font-medium sm:text-[12px] w-65 max-w-125 md:w-123.5 md:text-[16px] leading-[23.95px]  text-[#161616]">
          {van.description}
        </p>
        <button className="py-2 rounded-[5px] w-65 bg-[#FF8C38] max-w-125 text-white md:w-123">
          Rent this van
        </button>
      </div>
    </div>
  );
}
