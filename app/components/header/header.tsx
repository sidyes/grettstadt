import Image from "next/image";
import Navbar from "./navbar";
import headerImage from "../../images/header.jpg";
import classNames from "classnames";

export default function Header({ showImage = true }) {
  return (
    <header
      className={classNames("flex flex-col w-full overflow-hidden", {
        "h-screen": showImage,
      })}
    >
      <Navbar />
      {showImage && (
        <Image
          src={headerImage}
          alt={"Ansicht von oben"}
          quality="100"
          fill
          className="object-cover object-center"
        />
      )}
    </header>
  );
}
