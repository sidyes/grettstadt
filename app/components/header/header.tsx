import Image from "next/image";
import Navbar from "./navbar";
import headerImage from "../../images/header.jpg";

export default function Header() {
  return (
    <div className="h-screen w-full overflow-hidden relative">
      <Navbar />
      <Image
        src={headerImage}
        alt={"Ansicht von oben"}
        quality="100"
        fill
        className="w-full h-full object-cover object-center"
      />
    </div>
  );
}
