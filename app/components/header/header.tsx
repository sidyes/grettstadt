import Image from "next/image";
import Navbar from "./navbar";
import headerImage from "../../images/header.jpg";
import classNames from "classnames";
import Link from "next/link";

export default function Header({ showImage = true }) {
  return (
    <header
      className={classNames("flex flex-col w-full overflow-hidden", {
        "md:h-screen": showImage,
      })}
    >
      <Navbar />
      {showImage && (
        <>
          <div className="relative w-full h-auto md:hidden">
            <Image
              src={headerImage}
              alt="Ansicht von oben"
              quality="100"
              layout="responsive"
              height={600}
              className="object-cover object-center mt-[81px] sm:mt-[96px]"
            />
          </div>

          <div className="relative w-full h-full hidden md:block">
            <Image
              src={headerImage}
              alt="Ansicht von oben"
              quality="100"
              layout="fill"
              className="object-cover object-center"
            />
            <Link
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
              href="/#start"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 text-black -ml-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
          </div>
        </>
      )}
    </header>
  );
}
