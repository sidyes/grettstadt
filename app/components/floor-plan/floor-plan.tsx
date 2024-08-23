import Image, { StaticImageData } from "next/image";

interface FloorPlanProps {
  src: StaticImageData;
  alt: string;
}

export default function FloorPlan({ src, alt }: FloorPlanProps) {
  return (
    <div className="my-4">
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
