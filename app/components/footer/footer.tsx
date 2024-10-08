import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center justify-end px-4">
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link
            href="/impressum"
            className="text-white hover:text-blue-300 transition-colors duration-300 no-underline"
          >
            Impressum
          </Link>
        </div>
      </div>
    </footer>
  );
}
