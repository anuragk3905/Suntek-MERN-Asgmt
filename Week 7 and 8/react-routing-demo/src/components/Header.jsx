import { NavLink } from "react-router"

function Header() {
  return (
    <div className="flex justify-between items-center px-10 bg-gray-400">
      <img className="py-2 rounded-[50%]" width="80px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRD9watd98GuxuplYkqW5OizlYfQa_Iy4_3g&s" alt="" />
      {/* navbar */}
      <nav>
        <ul className="flex gap-10 text-2xl">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="register">Register</NavLink>
          </li>
          <li>
            <NavLink to="login">Login</NavLink>
          </li>
          <li>
            <NavLink to="Technologies">Technologies</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header