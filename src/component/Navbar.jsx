import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar({ page, setPage }) {
  return (
    <header className="justify-center min-[368px]:justify-between md:px-8 py-5 flex-wrap fixed flex w-full items-center bg-[#FFF7ED] p-[20px]">
      <div>
        <Link to="/" className="font-extrabold text-[25px]">
          #VANLIFE
        </Link>
      </div>
      <nav className="sm:justify-center md:gap-8 text-sm md:text-base flex items-center gap-8 mr-3  text-[#4D4D4D] font-[600]">
        <Link
          className={`${page === "Host" ? "font-bold border-b" : "hover:underline"}`}
          onClick={() => setPage("Host")}
          to="/host"
        >
          Host
        </Link>
        <Link
          className={`${page === "About" ? "font-bold border-b" : "hover:underline"}`}
          onClick={() => setPage("About")}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`${page === "Vans" ? "font-bold border-b" : "hover:underline"}`}
          onClick={() => setPage("Vans")}
          to="/vans"
        >
          Vans
        </Link>
      </nav>
    </header>
  );
}
