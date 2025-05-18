import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="p-6">
      <ul className="flex gap-4 list-none">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`
            }
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/fund-contribution"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`
            }
          >
            Fund Contribution
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/expense"
            className={({ isActive }) =>
              `px-3 py-2 rounded-md transition-colors ${
                isActive
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
              }`
            }
          >
            Expense
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
