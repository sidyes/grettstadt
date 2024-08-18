import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-20 top-0 start-0 bg-gray-900/50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className="items-center justify-between hidden w-full md:flex md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0 w-full items-center justify-center list-none">
            <li>
              <Link
                href="/#lage"
                className="block py-2 px-3 text-white rounded"
              >
                Lage
              </Link>
            </li>
            <li>
              <Link
                href="/#eckdaten"
                className="block py-2 px-3 text-white rounded"
              >
                Eckdaten
              </Link>
            </li>
            <li>
              <Link
                href="/#erdgeschoss"
                className="block py-2 px-3 text-white rounded"
              >
                Erdgeschoss
              </Link>
            </li>
            <li>
              <Link
                href="/#obergeschoss"
                className="block py-2 px-3 text-white rounded"
              >
                Obergeschoss
              </Link>
            </li>
            <li>
              <Link
                href="/#untergeschoss"
                className="block py-2 px-3 text-white rounded"
              >
                Untergeschoss
              </Link>
            </li>
            <li>
              <Link
                href="/#dachboden"
                className="block py-2 px-3 text-white rounded"
              >
                Dachoben
              </Link>
            </li>
            <li>
              <Link
                href="/#aussenbereich"
                className="block py-2 px-3 text-white rounded"
              >
                Außenbereich
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
