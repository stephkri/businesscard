import { Outlet } from "react-router-dom";

export default function Layout (props) {
  return (
    <>
      <nav>
        <ul>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}