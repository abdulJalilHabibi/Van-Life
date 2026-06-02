import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [page, setPage] = useState("Home");
  return (
    <header className="justify-center min-[368px]:justify-between md:px-8 py-5 flex-wrap fixed flex w-full items-center bg-[#FFF7ED] p-[20px]">
      <div>
        <h1 className="font-extrabold text-[25px]">#VANLIFE</h1>
      </div>
      <nav className="sm:justify-center md:gap-8 text-sm md:text-base flex items-center gap-8 mr-8 text-[#4D4D4D] font-[600]">
        <Link
          className={`${page === "Home" ? "font-[700] border-b-1" : ""}`}
          onClick={() => setPage("Home")}
          to="/"
        >
          Home
        </Link>
        <Link
          className={`${page === "About" ? "font-[700] border-b-1" : ""}`}
          onClick={() => setPage("About")}
          to="/about"
        >
          About
        </Link>
        <Link
          className={`${page === "Vans" ? "font-[700] border-b-1" : ""}`}
          onClick={() => setPage("Vans")}
          to="/vans"
        >
          Vans
        </Link>
      </nav>
    </header>
  );
}
