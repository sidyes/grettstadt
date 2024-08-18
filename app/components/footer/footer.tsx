import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900/50 rounded-lg shadow">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <ul className="flex p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 md:mt-0 md:border-0 items-center justify-center w-full list-none">
          <li>
            <Link
              href="/impressum"
              className="block py-2 px-3 text-white rounded"
            >
              Impressum
            </Link>
          </li>

          <li>
            <Link
              href="/kontakt"
              className="block py-2 px-3 text-white rounded"
            >
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
