import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
export default function Layout({ page, setPage }) {
  return (
    <>
      <Navbar page={page} setPage={setPage} />
      <Outlet />
    </>
  );
}
