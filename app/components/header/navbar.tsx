import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-30 bg-gray-800 bg-opacity-75 backdrop-blur-md shadow-md">
      <div className="max-w-screen-xl mx-auto p-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-white">
          MeinEinfamilienhaus
        </Link>
        <div className="hidden md:flex space-x-8">
          <NavLink href="/#lage" label="Lage" />
          <NavLink href="/#eckdaten" label="Eckdaten" />
          <NavLink href="/#erdgeschoss" label="Erdgeschoss" />
          <NavLink href="/#obergeschoss" label="Obergeschoss" />
          <NavLink href="/#untergeschoss" label="Untergeschoss" />
          <NavLink href="/#dachboden" label="Dachboden" />
          <NavLink href="/#aussenbereich" label="Außenbereich" />
        </div>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex md:hidden items-center p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-white relative group no-underline">
      <span className="transition-all duration-300 ease-in-out group-hover:text-blue-300">
        {label}
      </span>
      <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full"></span>
    </Link>
  );
}
