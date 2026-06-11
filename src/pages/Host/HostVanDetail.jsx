import { NavLink, Outlet } from "react-router-dom";
export default function HostVanDetail() {
  return (
    <div>
      <nav>
        <NavLink to=".">Details</NavLink>
        <NavLink to="pricing">Pricing</NavLink>
        <NavLink to="photos">Photos</NavLink>
      </nav>
    </div>
  );
}
