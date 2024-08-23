import Image, { StaticImageData } from "next/image";

interface FloorPlanProps {
  src: StaticImageData;
  alt: string;
}

export default function FloorPlan({ src, alt }: FloorPlanProps) {
  return (
    <div className="floor-plan-container my-4">
      <Image
        src={src}
        alt={alt}
        width={800}
        height={600}
        className="rounded-lg shadow-xl"
      />
    </div>
  );
}
