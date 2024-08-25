import Image, { StaticImageData } from "next/image";
import compassIcon from "../../images/compass.png";

interface FloorPlanProps {
  src: StaticImageData;
  alt: string;
  degreeCompass: number;
}

export default function FloorPlan({ src, alt, degreeCompass }: FloorPlanProps) {
  return (
    <div className="my-4 flex flex-col md:flex-row justify-center items-center gap-4">
      <Image
        src={compassIcon}
        width={80}
        height={80}
        alt="Kompass"
        style={{ transform: `rotate(${degreeCompass}deg)` }}
      />
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        height={100}
        width={100}
        className="rounded-lg shadow-xl"
      />
    </div>
  );
}
