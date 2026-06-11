import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

export default function Hostlayout({ page, setPage }) {
  return (
    <>
      <nav className="lg:pt-20 pt-30 pl-6  flex gap-4 flex-wrap bg-[#FFF7ED] ">
        <Link
          className={`${page === "Dashboard" ? "font-bold underline" : " md:text-[18px] font-medium  hover:underline "}`}
          onClick={() => setPage("Dashboard")}
          to="/host"
        >
          Dashboard
        </Link>
        <Link
          className={`${page === "Income" ? "font-bold underline" : "md:text-[18px] font-medium hover:underline "}`}
          onClick={() => setPage("Income")}
          to="/host/income"
        >
          Income
        </Link>
        <Link
          className={`${page === "Vans" ? "font-bold underline" : " md:text-[18px] font-medium  hover:underline "}`}
          onClick={() => setPage("Vans")}
          to="/host/vans"
        >
          Vans
        </Link>
        <Link
          className={`${page === "Reviews" ? "font-bold underline" : "text-[18px] font-medium hover:underline "}`}
          onClick={() => setPage("Reviews")}
          to="/host/review"
        >
          Reviews
        </Link>
      </nav>
      <Outlet />
    </>
  );
}
