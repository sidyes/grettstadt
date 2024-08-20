import Image from "next/image";
import Navbar from "./navbar";
import headerImage from "../../images/header.jpg";

export default function Header() {
  return (
    <header className="relative h-[70vh] w-full overflow-hidden">
      <Navbar />
      <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
      <Image
        src={headerImage}
        alt={"Ansicht von oben"}
        quality="100"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
        <h1 className="text-5xl font-extrabold mb-4 drop-shadow-md">
          Grettstadt Einfamilienhaus
        </h1>
        <p className="text-lg font-medium drop-shadow-md">
          Ihr Traumhaus in ruhiger Lage
        </p>
      </div>
    </header>
  );
}
