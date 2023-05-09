import Link from "next/link"
import Logo from "./Logo"

export default function Navbar() {
  return (
    <nav className="bg-green-600 border-gray-200">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <Logo />

        <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
          <div className="relative mt-3 md:hidden">
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search..."
            />
          </div>
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
            <li>
              <Link
                href="/"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded-lg
                md:hover:bg-transparent md:p-0 hover:text-white transition
                duration-500 "
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/service"
                className="block py-2 pl-3 pr-4 text-gray-700 rounded-lg md:hover:bg-transparent  md:p-0 hover:text-white transition duration-500 "
              >
                Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
